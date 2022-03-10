import React from "react"

import { StoryPage } from "@components"

import { fileupload } from "./fileupload"

export default {
  title: "Components / Form",
}

export const FileUpload = context => <StoryPage {...fileupload} {...context} />

FileUpload.storyName = "FileUpload"
