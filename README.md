# Plug-in: @cap-js/attachment

In this blog series, I am going to write about my understanding on the CAP JS plugin, how it works and how we can implement them in the CAP service. 

The list of available CAP Plugin & Enhancements can be found in the below link. 

https://cap.cloud.sap/docs/plugins/

All the CAP plugins are named under the `scoped` module that has the namespace `@cap-js`. In this step, we are going 
to take a look at the `Attachment` plugin, that is available as a `Beta` version. The node package that provides the functionality for attachment is `@cap-js/attachment`. 

The source code of this plugin can be found in the repository. 
https://github.com/cap-js/attachments

The Attachments plugin provides out-of-the-box asset storage and handling. To use it, all we need to do is to extend the domain model by using the predefined aspect called Attachments, that is delivered as part of `@cap-js/attachment` plugin. 

**Preview:** 
The `attachment` plugin also add the facets requried to display the attachment section on the Object page. This attachment sections uses the control <a href="https://sapui5.hana.ondemand.com/#/api/sap.m.upload.UploadSetwithTable">sap.m.upload.UploadSetwithTable</a>.

> This is an Experimental API since version 1.120. In my example, i am using the UI5 version, 1.120.10. Using the later version i get an error from the macros Table API. 

![preview-attachment-1](./assets/images/preview-attachment-1.png)

Clicking on the edit mode, will enable the Upload button. This button opens the file explorer to select the files. 

![preview-attachment-2](./assets/images/preview-attachment-2.png)

The selected files are added to the table and submitted to the backend upon save. 

![preview-attachment-3](./assets/images/preview-attachment-3.png)


# Step 1: Initialize the CAP Project

Initalize the cap project using the command `cds init` in the root directory of the project folder. 

Execute the command `npm install` to install the dependencies. 

You can now start the cap server using the command `cds watch`. This will start the cap server on `http://localhost:4004`. 

The service would now be empty without any entities defined. 