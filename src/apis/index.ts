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

// const api = axios.create({ baseURL: "https://abc-wavynote.koyeb.app/wavynote/v1.0" });
const api = axios.create({ baseURL: "http://localhost:3001" });

/*******************************************************/

/**
 *
 */
const signin = () => {};

/**
 *
 */
const signup = () => {};

/**
 *
 */
const duplicate = () => {};

/*******************************************************/

/**
 * GET
 * @description Get conversations
 */
const getConversations = () => {};

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
const getOpennotes = () => {};

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
 * @description Get folder list
 */
const getFolders = () => {};

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
 * @description Create folder
 */
const createFolder = () => {};

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

export default api;
