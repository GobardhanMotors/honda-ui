# Require any additional compass plugins here.
require "sass-globbing"
require "susy"
require "breakpoint"
require "color-schemer"
require "sassy-maps"
require "SassyLists"
require "sassy-buttons"
require "bootstrap-sass"


# Set this to the root of your project when deployed:
http_path = "/"
css_dir = File.join('app','themes','default')
sass_dir = File.join('app','themes','sass_default')
images_dir = File.join('app','themes','default','img')
javascripts_dir = "app\\bower_components\\unmanaged\\js"
fonts_dir = File.join('app','themes','default','fonts')

debug_info = true
environment = :development
output_style = :expanded

# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true
line_comments = true
color_output = false
enable_sourcemaps = true

# If you prefer the indented syntax, you might want to regenerate this
# project again passing --syntax sass, or you can uncomment this:
# preferred_syntax = :sass
# and then run:
# sass-convert -R --from scss --to sass sass scss && rm -rf sass && mv scss sass
