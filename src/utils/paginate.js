import _ from "lodash";

export function paginate(items,pageNumber, pageSize){
    //first we calculate the starting index of the items on this page
    const startIndex = (pageNumber - 1) * pageSize;
    //now we can use lodash to go to this index and take all the items of current page
    return _(items).slice(startIndex).take(pageSize).value();    //first convert array to lodash wrapper
    // _.slice(items,startIndex)
    // _.take()
}
