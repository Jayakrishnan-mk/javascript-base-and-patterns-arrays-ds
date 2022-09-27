couponCodeSvc.getCouponCode = async function (req, res) {
    try {
        let queryData = req.body;
        let skip = queryData.skip || 0;
        let limit = queryData.limit || 10;
        let advanceQuery;
        advanceQuery = await createAdvanceQuery(queryData);
        let finalQuery = {};
        console.log(advanceQuery.finalFilterQuery);
        if (advanceQuery.finalFilterQuery) {
            finalQuery = JSON.parse(`{${advanceQuery.finalFilterQuery}}`);
        }
        console.log(finalQuery.toString());
        let couponCodeCount = await CouponCode.find(finalQuery).count();
        let couponCodeDetails = await CouponCode.find(finalQuery).sort({ createdAt: -1 }).skip(skip).limit(limit);
        return { couponCodeDetails: couponCodeDetails, totalCount: couponCodeCount };
        // return true;
    } catch (err) {
        return Promise.reject(boom.badImplementation('Err: ', err));
    }
}

function createAdvanceQuery(requestData, baseQuery, baseTable) {
    return new Promise(function (resolve, reject) {
        let appendQuery = "";
        
        // let dateQueryToDate = "";
        // let dateQueryFromDate = "";
        // let approvalStatusQuery = "";
        
        let isEmpty = Object.values(requestData).every(x => (x === null || x === ''));
        let objectKeys = Object.keys(requestData);
        if (isEmpty) {
            resolve("");
            return;
        }
        
        for (let i = 0; i < objectKeys.length; i++) {
            console.log(objectKeys[i]);
            console.log(requestData[objectKeys[i]]);
            //
            if (requestData[objectKeys[i]] != null && requestData[objectKeys[i]] != undefined &&
                 objectKeys[i] != "skip" && objectKeys[i] != "limit" && objectKeys[i] != "sort" &&
                  objectKeys[i] != "orderBy") {
                console.log("!");
                
                if (objectKeys[i] == "programId" && requestData[objectKeys[i]] != "") {
                    // console.log(requestData[objectKeys[i]]);
                    appendQuery += `"programId":{"$in": ${requestData[objectKeys[i]]}},`;
                    //   //{"$and":[{"userId.name":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }}]},{"$and":[{"userId.firstName":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }}]},{"$and":[{"userId.lastName":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }}]},
                    //    appendQuery1 = `,"match":{"$or":[{"$and":[{"email":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }}]}]}`;
                } else if (objectKeys[i] == "searchText" && requestData[objectKeys[i]] != "") {
                    appendQuery += `"$or" : [{"couponName":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }},
                    {"discountPer":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }},
                    {"couponCode":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }}
                    ],`    //  {"couponCount":{ "$regex" : "${requestData[objectKeys[i]]}", "$options": "i" }},
                } else if (objectKeys[i] == "couponCode" && requestData[objectKeys[i]] != "") {
                    appendQuery += `"couponCode":"${requestData[objectKeys[i]]}",`
                } else if (objectKeys[i] == "showOnList") {
                    appendQuery += `"showOnList":${requestData[objectKeys[i]]}, "startDate": { "$lte": "${new Date().toISOString()}"}, "endDate": { "$gte": "${new Date().toISOString()}" },"couponCount": { "$gt": 0 },`
                } else if (objectKeys[i] == "isDefault") {
                    appendQuery += `"isDefault":${requestData[objectKeys[i]]},`
                } else if (objectKeys[i] == "isActive") {
                    appendQuery += `"isActive":${requestData[objectKeys[i]]},`
                } else if (objectKeys[i] == "channelPartnerId") {
                    appendQuery += `"channelPartnerId":"${requestData[objectKeys[i]]}",`
                }
            }
        }
        let n = appendQuery.lastIndexOf(",");
        let finalFilterQuery = appendQuery.slice(0, n);
        console.log(JSON.stringify(finalFilterQuery))
        resolve({ finalFilterQuery: finalFilterQuery });
    })
}
