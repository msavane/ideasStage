/*
 * Swagger Petstore
 * This spec is mainly for testing Petstore server and contains fake endpoints, models. Please do not use this for any other purpose. Special characters: \" \\
 *
 * OpenAPI spec version: 1.0.0
 * Contact: apiteam@swagger.io
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.4.19-SNAPSHOT
 *
 * Do not edit the class manually.
 *
 */

import {ApiClient} from "../ApiClient";
import {ApiResponse} from '../model/ApiResponse';
import {Pet} from '../model/Pet';

/**
* Pet service.
* @module api/PetApi
* @version 1.0.0
*/
export class PetApi {

    /**
    * Constructs a new PetApi. 
    * @alias module:api/PetApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instance} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }



    /**
     * Add a new pet to the store
     * 
     * @param {module:model/Pet} body Pet object that needs to be added to the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    addPetWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling addPet");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Add a new pet to the store
     * 
     * @param {module:model/Pet} body Pet object that needs to be added to the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    addPet(body) {
      return this.addPetWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Deletes a pet
     * 
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    deletePetWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling deletePet");
      }


      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
        'api_key': opts['apiKey']
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet/{petId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Deletes a pet
     * 
     * @param {Number} petId Pet id to delete
     * @param {Object} opts Optional parameters
     * @param {String} opts.apiKey 
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    deletePet(petId, opts) {
      return this.deletePetWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Array.<module:model/String>} status Status values that need to be considered for filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pet>} and HTTP response
     */
    findPetsByStatusWithHttpInfo(status) {
      let postBody = null;

      // verify the required parameter 'status' is set
      if (status === undefined || status === null) {
        throw new Error("Missing the required parameter 'status' when calling findPetsByStatus");
      }


      let pathParams = {
      };
      let queryParams = {
        'status': this.apiClient.buildCollectionParam(status, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];

      return this.apiClient.callApi(
        '/pet/findByStatus', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finds Pets by status
     * Multiple status values can be provided with comma separated strings
     * @param {Array.<module:model/String>} status Status values that need to be considered for filter
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pet>}
     */
    findPetsByStatus(status) {
      return this.findPetsByStatusWithHttpInfo(status)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Array.<String>} tags Tags to filter by
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link Array.<module:model/Pet>} and HTTP response
     */
    findPetsByTagsWithHttpInfo(tags) {
      let postBody = null;

      // verify the required parameter 'tags' is set
      if (tags === undefined || tags === null) {
        throw new Error("Missing the required parameter 'tags' when calling findPetsByTags");
      }


      let pathParams = {
      };
      let queryParams = {
        'tags': this.apiClient.buildCollectionParam(tags, 'csv')
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = [Pet];

      return this.apiClient.callApi(
        '/pet/findByTags', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Finds Pets by tags
     * Multiple tags can be provided with comma separated strings. Use tag1, tag2, tag3 for testing.
     * @param {Array.<String>} tags Tags to filter by
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link Array.<module:model/Pet>}
     */
    findPetsByTags(tags) {
      return this.findPetsByTagsWithHttpInfo(tags)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/Pet} and HTTP response
     */
    getPetByIdWithHttpInfo(petId) {
      let postBody = null;

      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling getPetById");
      }


      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['api_key'];
      let contentTypes = [];
      let accepts = ['application/xml', 'application/json'];
      let returnType = Pet;

      return this.apiClient.callApi(
        '/pet/{petId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Find pet by ID
     * Returns a single pet
     * @param {Number} petId ID of pet to return
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/Pet}
     */
    getPetById(petId) {
      return this.getPetByIdWithHttpInfo(petId)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Update an existing pet
     * 
     * @param {module:model/Pet} body Pet object that needs to be added to the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updatePetWithHttpInfo(body) {
      let postBody = body;

      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updatePet");
      }


      let pathParams = {
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/json', 'application/xml'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Update an existing pet
     * 
     * @param {module:model/Pet} body Pet object that needs to be added to the store
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updatePet(body) {
      return this.updatePetWithHttpInfo(body)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * Updates a pet in the store with form data
     * 
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Updated name of the pet
     * @param {String} opts.status Updated status of the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing HTTP response
     */
    updatePetWithFormWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling updatePetWithForm");
      }


      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'name': opts['name'],
        'status': opts['status']
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['application/x-www-form-urlencoded'];
      let accepts = ['application/xml', 'application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/pet/{petId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * Updates a pet in the store with form data
     * 
     * @param {Number} petId ID of pet that needs to be updated
     * @param {Object} opts Optional parameters
     * @param {String} opts.name Updated name of the pet
     * @param {String} opts.status Updated status of the pet
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}
     */
    updatePetWithForm(petId, opts) {
      return this.updatePetWithFormWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


    /**
     * uploads an image
     * 
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional data to pass to server
     * @param {File} opts.file file to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with an object containing data of type {@link module:model/ApiResponse} and HTTP response
     */
    uploadFileWithHttpInfo(petId, opts) {
      opts = opts || {};
      let postBody = null;

      // verify the required parameter 'petId' is set
      if (petId === undefined || petId === null) {
        throw new Error("Missing the required parameter 'petId' when calling uploadFile");
      }


      let pathParams = {
        'petId': petId
      };
      let queryParams = {
      };
      let headerParams = {
      };
      let formParams = {
        'additionalMetadata': opts['additionalMetadata'],
        'file': opts['file']
      };

      let authNames = ['petstore_auth'];
      let contentTypes = ['multipart/form-data'];
      let accepts = ['application/json'];
      let returnType = ApiResponse;

      return this.apiClient.callApi(
        '/pet/{petId}/uploadImage', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType
      );
    }

    /**
     * uploads an image
     * 
     * @param {Number} petId ID of pet to update
     * @param {Object} opts Optional parameters
     * @param {String} opts.additionalMetadata Additional data to pass to server
     * @param {File} opts.file file to upload
     * @return {Promise} a {@link https://www.promisejs.org/|Promise}, with data of type {@link module:model/ApiResponse}
     */
    uploadFile(petId, opts) {
      return this.uploadFileWithHttpInfo(petId, opts)
        .then(function(response_and_data) {
          return response_and_data.data;
        });
    }


}