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
  activate :relative_assets
end

helpers do
  # Format Title
  def format_title
    separator = " | "
    if @page_title
      site_title + separator + @page_title
    else
      site_title
    end
  end
end

###
# Site Settings
###

set :site_title, 'Myles.Coffee'
set :site_url, 'http://myles.coffee'
set :site_baseurl, ''
set :site_description, 'Myles loves coffee.'
set :site_author, 'Myles Braithwaite'
