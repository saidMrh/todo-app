import { supabase } from "../supabase";

export function save(tableName, object){
    return supabase.from(tableName).insert(object);
}

export function findAll(tableName){
    return supabase.from(tableName).select();
}

export function update(tableName, object, objectId){
    return supabase.from(tableName).update(object).match(objectId);
}

export function findOne(tableName, id){
    return supabase
    .from(tableName)
    .select()
    .eq('id', id);
}

export function deleteById(tableName, obj){
    return supabase
    .from(tableName)
    .delete()
    .match(obj);
}