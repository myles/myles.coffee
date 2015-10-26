#= require vendor/jquery-2.1.1.min
#= require vendor/iconic.min
#= require vendor/egg

class GoogleAnalytics
  @init: (webPropertyId) ->
    @_initQueue webPropertyId
    scriptTag = @_createScriptTag()
    @_injectScriptTag scriptTag
    true

  @_initQueue: (webPropertyId) ->
    window._gaq ?= []
    window._gaq.push ['_setAccount', webPropertyId]
    window._gaq.push ['_trackPageview']

  @_createScriptTag: ->
    scriptTag = document.createElement 'script'
    scriptTag.type = 'text/javascript'
    scriptTag.async = true
    protocol = location.protocol
    scriptTag.src = "#{ protocol }//stats.g.doubleclick.net/dc.js"
    scriptTag

  @_injectScriptTag: (scriptTag) ->
    firstScriptTag = document.getElementsByTagName('script')[0]
    firstScriptTag.parentNode.insertBefore scriptTag, firstScriptTag

  @trackPageView: (url) ->
    window._gaq.push ['_trackPageview', url]

  @trackEvent: (category, action,
  label = null, value = null, nonInteraction = null) ->
    trackedEvent = ['_trackEvent', category, action]
    for argument in [label, value, nonInteraction]
      if argument? then trackedEvent.push argument else break
    window._gaq.push trackedEvent

jQuery ->
  GoogleAnalytics.init 'UA-1642439-35'
  return

ready = ->
  # Track one someone clicks on on of the social network icons.
  $("nav li a").mousedown ->
    GoogleAnalytics.trackPageView "/#{ this.id }/"
  
  # Track one someone hovers over the coffee cup logo.
  $(".logo").mouseover ->
    GoogleAnalytics.trackPageView '/logo/'
    return
  
  egg = new Egg
  
  egg.AddCode("up,up,down,down,left,right,left,right,b,a", (->
    return
  ), 'konami-code').AddHook(->
    console.log 'Hook called for: ' + @activeEgg.keys
    console.log @activeEgg.metadata
    $('.modal-state').prop('checked', true).change()
    return
  ).Listen()
  
  # When the .modal-state checkbox changes open/close the modal.
  $("#modal").on 'change', ->
    if $(this).is(':checked')
      $('body').addClass 'modal-open'
      GoogleAnalytics.trackPageView "/email-modal/open/"
    else
      $('body').removeClass 'modal-open'
      GoogleAnalytics.trackPageView "/email-modal/close/"
    return
  
  $('.modal-fade-screen, .modal-close').on 'click', ->
    $('.modal-state:checked').prop('checked', false).change()
    return
  
  $('.modal-inner').on 'click', (e) ->
    e.stopPropagation()
    return
  
  return

$(document).ready(ready)
$(document).on('page:load', ready)
