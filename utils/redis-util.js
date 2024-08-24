/**
 * 判断某个key是否存在
 * @param key
 * @returns {Promise<boolean>}
 */
export async function redisExistKey(key) {
    return redis.exists(key);
}

/**
 * 获取某个key的值
 * @param key
 * @returns {Promise<Object>}
 */
export async function redisGetKey(key) {
    return JSON.parse(await redis.get(key));
}

/**
 * 为某个key设置值，value必须是个键值对
 * @param key
 * @param value
 * @returns {Promise<*>}
 */
export async function redisSetKey(key, value = {}) {
    return redis.set(
        key,
        JSON.stringify(value),
    );
}

/**
 * 判断是否存在这个key然后再取值，如果没有就返回null
 * @param key
 * @returns {Promise<Object|Array>}
 */
export async function redisExistAndGetKey(key) {
    if (await redisExistKey(key)) {
        return redisGetKey(key);
    }
    return null;
}

/**
 * 在某个 key 的末尾插入一个对象
 * @param key
 * @param obj
 * @returns {Promise<void>}
 */
export async function redisExistAndInsertObject(key, obj) {
    let objs = await redisExistAndGetKey(key);
    if (objs) {
        objs = {...objs, ...obj};
        await redisSetKey(key, objs);
    } else {
        await redisSetKey(key, obj);
    }
}

/**
 * 更新Redis中某个对象的值
 * @param key
 * @param updateKey
 * @param updateObj
 * @returns {Promise<void>}
 */
export async function redisExistAndUpdateObject(key, updateKey, updateObj) {
    let objs = await redisExistAndGetKey(key);
    if (Object.keys(objs).includes(updateKey)) {
        objs[updateKey] = updateObj;
        await redisSetKey(key, objs);
    }
}