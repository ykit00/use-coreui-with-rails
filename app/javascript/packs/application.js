// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import Rails from "@rails/ujs"
import Turbolinks from "turbolinks"
import * as ActiveStorage from "@rails/activestorage"
import "channels"

import "@coreui/coreui"

import "../stylesheets/application"

// 
// アイコンで使用するSVGファイルをインポートする
// 使用する際のパス: `media/sprites/<filename>`
// 
import "@coreui/icons/sprites/brand.svg"
import "@coreui/icons/sprites/flag.svg"
import "@coreui/icons/sprites/free.svg"

const images = require.context('../images/', true)
const imagePath = (name) => images(name, true)

Rails.start()
Turbolinks.start()
ActiveStorage.start()
