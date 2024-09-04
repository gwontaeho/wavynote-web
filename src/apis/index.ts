/*
 *
 * ## Base URL
 * https://abc-wavynote.koyeb.app/wavynote/v1.0
 *
 * ## Swagger
 * https://abc-wavynote.koyeb.app/swagger/index.html
 *
 */

import axios from "axios";

// const BASE_URL = "http://localhost:3001";
// const BASE_URL = "https://abc-wavynote.koyeb.app/wavynote/v1.0";
const BASE_URL = "/api";
const AUTHORIZATION = "Basic d2F2eW5vdGU6d2F2eTIwMjMwOTE0";

const api = axios.create({ baseURL: BASE_URL });

/** 임시 */
api.interceptors.request.use(
    (config) => {
        config.headers.Authorization = AUTHORIZATION;
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

/*******************************************************/

/**
 *
 */
export const signin = (data: any) => {
    return api.post("/profile/signin", data);
};

/**
 *
 */
export const signup = (data: any) => {
    return api.post("/profile/signup", data);
};

/**
 *
 */
export const duplicate = (id: string) => {
    return api.get(`/profile/duplicate?id=${id}`);
};

/*******************************************************/

/**
 * GET
 * @description Get conversations
 */
export const getConversations = (id: string) => {
    return api.get(`/box/conversationlist?id=${id}`);
};

/**
 * GET
 * @description Get box list
 */
const getBoxes = () => {};

/**
 * GET
 * @description Get box detail
 */
const getBox = () => {};

/*******************************************************/

/**
 * @description Get open-note list
 */
export const getOpennotes = () => {
    return api.get(`/opennote/list?uid=chelseafandev@gmail.com`);
};

/**
 * @description Get open-note detail
 */
const getOpennote = () => {};

/**
 * @description Get open-note searches
 */
const getOpennoteSearches = () => {};

/*******************************************************/

/**
 * GET
 * @description 폴더 목록 조회
 */
export const getFolders = ({ id }: { id: string }) => {
    return api.get(`/main/folderlist?id=wavynoteadmin@gmail.com`);
};

/**
 * GET
 * @description 노트 목록 조회
 */
export const getNotes = ({ uid, fid }: { uid: string; fid: string }) => {
    return api.get(`/main/notelist?uid=wavynoteadmin@gmail.com&fid=${fid}`);
};

/**
 * GET
 * @description Get folder
 */
const getFolder = () => {};

/**
 * GET
 * @description Get folder searches
 */
const getFolderSearches = () => {};

/**
 * GET
 * @description Get folders searches
 */
const getFoldersSearches = () => {};

/**
 * POST
 * @description 폴더 생성
 */
export const createFolder = async (data: any) => {
    return api.post("/main/folder", data);
};

/**
 * DELETE
 * @description Delete folder
 */
const deleteFolder = () => {};

/**
 * PUT
 * @description Update folder
 */
const updateFolder = () => {};

/*******************************************************/

/**
 * POST
 * @description 노트 생성
 */
export const createNote = (data: any) => {
    return api.post("/write/save", data);
};
