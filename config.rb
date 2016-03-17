activate :directory_indexes
activate :autoprefixer

set :relative_link, true
set :css_dir, 'assets/stylesheets'
set :js_dir, 'assets/javascripts'
set :images_dir, 'assets/images'
set :fonts_dir, 'assets/fonts'
set :layout, 'layouts/application'

page '/*.xml', layout: false
page '/*.josn', layout: false
page '/*.txt', layout: false

configure :development do
  activate :livereload
end

configure :build do
  activate :relative_assets
  
  activate :asset_hash
  
  activate :minify_css
  activate :minify_html
  activate :minify_javascript
  
  activate :gzip
end

activate :deploy do |deploy|
  deploy.deploy_method = :rsync
  deploy.host = 'bear.mylesbraithwaite.com'
  deploy.path = '/srv/www/myles.coffee/www/html/'
  deploy.user = 'myles'
  deploy.clean = true
end

###
# Site Settings
###

set :site_title, 'Myles.Coffee'
set :site_url, 'https://myles.coffee'
set :site_baseurl, ''
set :site_description, 'Myles Loves Coffee.'
set :site_author, 'Myles Braithwaite'
