import { Category } from '../models/category'

export const GET_CATEGORY = "GET_CATEGORY"
export const GET_CATEGORY_SUCCESS = "GET_CATEGORY_SUCCESS"

// 定义获取分类类型
export interface GetCategoryAction {
  type: typeof GET_CATEGORY
}

// 定义获取分类成功类型
export interface GetCategorySuccessAction {
  type: typeof GET_CATEGORY_SUCCESS
  payload: Category[]
}

// 获取分类action
export const getCategory = (): GetCategoryAction => ({
  type: GET_CATEGORY
})

// 获取分类成功action
export const getCategorySuccess = (
  payload: Category[]
): GetCategorySuccessAction => ({
  type: GET_CATEGORY_SUCCESS,
  payload
})

export type CategoryUnionType =
  | GetCategoryAction
  | GetCategorySuccessAction

