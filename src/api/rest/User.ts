import { IUSER } from "../../context/user/types";
import { IUser } from "../../types";
import axiosClient from "./AxiosClient";

export class User {
  /**
   *  get All user
   * @param params
   * @returns
   */
  static getAll = (params: object): Promise<IUser<IUSER>> => {
    const url = "/user";
    return axiosClient.get(url, { params });
  };

  /**
   * get Post with id
   * @param id
   * @returns
   */
  static getById = (id: number | string): Promise<IUSER> => {
    const url = `/user/${id}`;
    return axiosClient.get(url);
  };

  /**
   * add Post
   * @param data
   * @returns
   */
  static add = (data: any): any => {
    const url = "/user";
    return axiosClient.post(url, data);
  };

  /**
   * update post
   * @param data
   * @returns
   */
  static update = (data: any): any => {
    const url = `/user/${data.id}`;
    return axiosClient.patch(url, data);
  };

  /**
   * remove post
   * @param id
   * @returns
   */
  static remove = (id: number | string): any => {
    const url = `/user/${id}`;
    return axiosClient.delete(url);
  };
}
