/**
2021-10-08

1. 两数之和
给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出和为目标值 target 的那两个整数，并返回它们的数组下标。
你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
你可以按任意顺序返回答案。

输入：nums = [2,7,11,15], target = 9
输出：[0,1]
解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。

输入：nums = [3,3], target = 6
输出：[0,1]
*/

/**
 * 暴力求解
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum1 = (nums, target) => {
  let result = []
  let len = nums.length
  let index = 0
  let key = 1
  for (index = 0; index < len - 1; ++index) {
    for (key = 1; key < len; ++key) {
      console.log(key)
      if (nums[index] + nums[key] === target) {
        result = [index, key]
        return result
      }
    }
  }
  return result
}

/**
 * 内层遍历优化循环次数
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum2 = (nums, target) => {
  let result = []
  let len = nums.length
  let index = 0
  let key
  for (index; index < len - 1; ++index) {
    for (key = index + 1; key < len; ++key) { // 每次都从 index 之后开始遍历
      console.log(key)
      if (nums[index] + nums[key] === target) {
        result = [index, key]
        return result
      }
    }
  }
  return result
}

/**
 * 利用哈希表
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum3 = (nums, target) => {
  let result = []
  let numMap = {}
  let len = nums.length
  let index = 0
  let key
  for (index; index <= len; ++index) {
    console.log(numMap)
    let num = nums[index]
    key = target - num
    if (key in numMap) { // 不能使用 if (numMap[key]) {}, 因为 numMap[key] 可能等于 0
      result = [numMap[key], index]
      return result
    } else {
      numMap[num] = index
    }
  }
  return result
}

/**
 * 遍历和哈希表优化
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum4 = (nums, target) => {
  let result = []
  let numMap = {}
  numMap[nums[0]] = 0 // 提前将第 1 个数字存入哈希表
  let len = nums.length
  let index = 1
  let key
  for (index; index < len; ++index) { // 从第 2 个数字开始遍历
    console.log(numMap)
    key = target - nums[index]
    if (key in numMap) {
      result = [numMap[key], index]
      return result
    } else {
      numMap[nums[index]] = index
    }
  }
  return result
}

/**
 * 使用 Map 替代 Object 生成哈希表
 * Object 只能用字符串当作键，数值 2 会被转换为字符串 '2'
 * Map 是所有类型的值都可以当作键，数值 2 还是 数值 2
 * @param {*} nums 
 * @param {*} target 
 * @returns 
 */
const twoSum5 = (nums, target) => {
  let result = []
  let numMap = new Map()  // 使用 Map 生成哈希表
  numMap.set(nums[0], 0)
  let len = nums.length
  let index = 1
  let key
  for (index; index < len; ++index) {
    console.log(numMap)
    key = target - nums[index]
    if (numMap.has(key)) {
      result = [numMap.get(key), index]
      return result
    } else {
      numMap.set(nums[index], index)
    }
  }
  return result
}

let twoSum = twoSum5

let result1 = twoSum([2, 7, 11, 15], 9)
console.log(result1)

let result2 = twoSum([2, 7, 11, 15], 26)
console.log(result2)

let result3 = twoSum([3, 7, 11, 3], 6)
console.log(result3)
