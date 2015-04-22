require "extensions/views"

activate :views
activate :directory_indexes

set :relative_link, true
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layout, 'layouts/application'

configure :development do
  activate :livereload
end

configure :build do
  # Relative assets needed to deploy to GitHub Pages
  #activate :relative_assets
  
  activate :asset_hash
  
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  
  activate :gzip
end

###
# Site Settings
###

set :site_title, 'Myles.Coffee'
set :site_url, 'http://myles.coffee'
set :site_baseurl, ''
set :site_description, 'Myles loves coffee.'
set :site_author, 'Myles Braithwaite'
