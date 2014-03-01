'use strict'
module.exports = (grunt) ->

  #***********************************
  # Loading Grunt Tasks Automatically
  #***********************************
  require('matchdep').filterDev('grunt-*').forEach grunt.loadNpmTasks

  zoera =
    scss        : 'assets/sass'
    css         : 'assets/css'
    js          : 'assets/js'
    imgs        : 'assets/img'
    projectName : 'universe_builder'

  grunt.initConfig

    # Grunt Config
    # ================================
    config : zoera
    pkg    : grunt.file.readJSON('package.json')

    # Concatenate & Minify JavaScript
    # ================================
    uglify:
      options:
        banner   : '/* Project: <%= config.projectName %> - Author: <%= pkg.author.name %> - <%= pkg.author.email %> - <%= pkg.author.url %> - Last updated: <%= grunt.template.today(\'yyyy-mm-dd\') %> - Copyright © <%= grunt.template.today(\'yyyy\') %> */\n'
        mangle   : true
        compress : true

      dev:
        files:
          '<%= config.js %>/scripts.min.js' : ['<%= config.js %>/plugins.js', '<%= config.js %>/script.js']

    jshint:
      options:
        jshintrc: '.jshintrc'

      src: [
        '<%= config.js %>/script.js'
      ]

    # Compiling Sass
    # ================================
    compass:
      dev:
        options:
          config      : 'assets/config.rb',
          sassDir     : 'assets/sass',
          cssDir      : 'assets/css',
          imagesDir   : 'assets/img'

    # Autoprefixer
    # More info here: https://github.com/ai/autoprefixer & https://github.com/nDmitry/grunt-autoprefixer
    # ================================
    autoprefixer:
      options:
        browsers: ['> 1%', 'last 1 version', 'android 4', 'ios 6']
        diff: true

      files:
        src  : '<%= config.css %>/main.css'
        dest : '<%= config.css %>/main.css'

    # CSSMIN
    # ================================

    cssmin:
      minify:
        expand : true,
        cwd    : '<%= config.css %>/',
        src    : ['*.css', '!*.min.css', '!*.css.map'],
        dest   : '<%= config.css %>/',
        ext    : '.min.css'

    # Ember Templates / Handlebars compiler
    # ================================

    emberTemplates:
      compile:
        options:
          templateBasePath: /ember\/templates\//
        files:
          'ember/templates.js': 'ember/templates/**/*.hbs'

    # Image optimization
    # ================================

    imagemin:
      png:
        options:
          optimizationLevel: 7
        files: [
            expand: true,
            cwd: '<%= config.imgs %>/'
            src: ['**/*.png']
            dest: '<%= config.imgs %>/'
            ext: '.png'
        ]

      jpg:
        options:
          progressive: true
        files: [
            expand: true,
            cwd: '<%= config.imgs %>/'
            src: ['**/*.jpg']
            dest: '<%= config.imgs %>/'
            ext: '.jpg'
        ]

    # SVG optimization
    # ================================
    svgmin:
      options:
        plugins: [
          removeViewBox    : true
          removeEmptyAttrs : true
        ]

      build:
        files: [
          expand : true
          cwd    : '<%= config.imgs %>/'
          src    : ['**/*.svg']
          dest   : '<%= config.imgs %>/'
          ext    : '.svg'
        ]

    # Karma config
    # ===============================
    # noAuto for tasks that shouldn't run when you do grunt test
    # karma:
    #   options:
    #     configFile: 'karma.coffee'
    #     background: false
    #     autoWatch: false
    #     singleRun: false
    #   bg:
    #     background: true
    #   watch:
    #     autoWatch: true
    #   test:
    #     singleRun: true
    #     port: 9877
    #     browsers: ['PhantomJS']
    #     reporters: ['dots', 'junit']
    #     junitReporter:
    #       outputFile: 'js-test-results.xml'

    # Watch task
    # ================================
    watch:
      emberTemplates:
        files: 'ember/templates/**/*.hbs',
        tasks: ['emberTemplates']
        options:
          livereload: true

      img:
        files: ['<%= config.imgs %>/']
        tasks: ['imagemin', 'svgmin']

      js:
        files: ['<%= config.js %>/*.js']
        tasks: ['jshint', 'uglify:dev']

      compass:
        files: ['<%= config.scss %>/{,**/}*.{scss,sass}']
        tasks: ['compass:dev']
        options:
          livereload: true

      css:
        files: [
          '<%= config.css %>/*.css'
          '!<%= config.css %>/*.css.*'
          '!<%= config.css %>/*.min.css'
        ]
        tasks: ['autoprefixer', 'cssmin']
        options:
          livereload: true

      # karma:
      #   files: ['ember/**/*.js', 'tests/frontend/**/*.js']
      #   tasks: ['karma:bg:run']


  # Change the default watch task so that it runs the karma server before running watch
  # grunt.renameTask('watch', '_watch')
  # grunt.registerTask 'watch', ->
  #   # rename the config to the new task name
  #   oldConfig = grunt.config.getRaw('watch')
  #   grunt.config.set('watch')
  #   grunt.config.set('_watch', oldConfig)

    # grunt.task.run ['karma:bg:start', '_watch']

  # Registering Tasks
  # ================================
  grunt.registerTask 'default', (target) ->
    grunt.task.run [
      'compass'
      'autoprefixer'
      'emberTemplates'

      'cssmin'
      # 'jshint'
      # 'uglify'

      # 'imagemin'
      # 'svgmin'

      # 'karma:test' # run the frontend tests once on start

      'watch'
    ]
