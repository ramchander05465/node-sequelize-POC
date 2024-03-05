import db from "./models";

/**
 * generic method for reading the content.
 * @param table : table name where we have to run the query. 
 * @param query : dynamic query.
 * @returns : based on the query, this method will return the data.
 */
export const getData = async (table:string, query:any={}) => {
    let data = await db[table].findAll(query);
    return data;
} 
/**
 * generic method for saving the content.
 * @param table : table name where we have to save the content. 
 * @param contents : content which we are going to save.
 * @returns : newly saved content.
 */
export const saveData = async (table:string, contents:any={}) => {
    let data = await db[table].create(contents);
    return data;
} 
/**
 * generic method for updating the content.
 * @param table : table name where we have to update the content. 
 * @param contents : updated content.
 * @param condition : based on the condition param, below method will update the content
 * @returns : true/false.
 */
export const updateData = async (table:string, contents:any={}, condition:any={}) => {
    let data = await db[table].update(contents, condition);
    return data;
} 
/**
 * generic method for updating the content.
 * @param table : table name.
 * @param condition : based on the condition, below method will delete the record.
 * @returns true/false.
 */
export const deleteData = async (table:string, condition:any={}) => {
    let data = await db[table].destroy(condition);
    return data;
} 

export default db;