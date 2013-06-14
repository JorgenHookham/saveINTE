"use strict";var saveINTEapp=angular.module("saveINTEapp",[]);saveINTEapp.controller("heroGridController",["$scope",function(e){e.heroBoxes,e.heroGrid=$(".hero-grid--container"),e.heroGrid.masonry({itemSelector:".hero-box",columnWidth:function(e){return e/4},isResizable:!0}),$(window).ready(function(){e.heroGrid.masonry("reload")}),e.photoBoxes=[{quote:"We have one of the best programs in the university, if anything it should be looked at as one of its crown jewels.",author:"Parker Busswood",credential:"Front-End Engineer, East Side Games",imageUrl:"people/parker-busswood.jpg",type:"photo",priority:2,template:"templates/photo.html"},{quote:"As an alumnus I stand to lose my biggest network, fresh talent coming out of the program.",author:"Jørgen Hookham",credential:"Designer, Sokanu",imageUrl:"people/jorgen-hookham.jpg",type:"photo",priority:5,template:"templates/photo.html"},{quote:"The world is having an asymmetric education problem, and you actually have a program where 85% of students get a job.",author:"Spencer Thompson",credential:"CEO, Sokanu",imageUrl:"people/spencer-thompson.jpg",type:"photo",priority:6,template:"templates/photo.html"},{quote:"The Interactive Design Program is the reason I have the career I do today, I would be nowhere without it.",author:"Sean Patterson",credential:"System Analyst, RewardStream",imageUrl:"people/sean-patterson.jpg",type:"photo",priority:9,template:"templates/photo.html"},{quote:"I honestly don't know what I would be doing without the skills and knowledge the program has given me under my belt.",author:"Poyan Behboudi",credential:"INTE Graduate, 2013",imageUrl:"people/poyan-behboudi.jpg",type:"photo",priority:6,template:"templates/photo.html"}],e.quoteBoxes=[{quote:"Interactive Design has played an integral role in the growth of Idea Rebel.",author:"Jamie Garratt, Idea Rebel",type:"quote",priority:1,template:"templates/quote.html"},{quote:"This is one of the most innovative and valuable programs at Capilano University.",author:"Cyri Jones, ZENPortfolios",type:"quote",priority:2,template:"templates/quote.html"},{quote:"We feel as if we discovered gold on campus.",author:"Myles Galvin, Capilano Small Business Association",type:"quote",priority:2,template:"templates/quote.html"},{quote:"I owe all of my success to this program.",author:"Matt Vague, Metalab",type:"quote",priority:1,template:"templates/quote.html"},{quote:"The vast majority of graduates of this program get jobs. Good, long term jobs.",author:"Dave Rankin",type:"quote",priority:2,template:"templates/quote.html"},{quote:"Coding is the new literacy.",author:"Hank Leber",credential:"CEO & Co-Founder GonnaBe",type:"quote",priority:8,template:"templates/quote.html"},{quote:"For the foreseeable future, coding is one of the most important and desirable skills there is.",author:"Asher Hunt",credential:"Lead Mobile Designer, LivePerson",type:"quote",priority:3,template:"templates/quote.html"},{quote:"It's the battle of the tech literate vs. the tech illiterate.",author:"Hank Leber",credential:"CEO & Co-Founder GonnaBe",type:"quote",priority:20,template:"templates/quote.html"},{quote:"Learn to code. You won't regret it.",author:"Hank Leber",credential:"CEO & Co-Founder GonnaBe",type:"quote",priority:3,template:"templates/quote.html"},{quote:"Great program - our son is a very successful grad of this program.",author:"Kent Brownlow",credential:"Parent",type:"quote",priority:5,template:"templates/quote.html"},{quote:"This program is valuable to both industry and students. It is a proven winner. Cutting it is more than unfortunate but misguided.",author:"Alvin Wasserman",credential:"President, Wasserman+Partners",type:"quote",priority:5,template:"templates/quote.html"}],e.vineBoxes=[],e.youtubeBoxes=[{embedCode:"MKqs_DFjbqk",author:"Lorraine Chisholm",credential:"Director of UX, Work at Play",type:"video",priority:1,template:"templates/youtube.html"},{embedCode:"j4MkyrHjnic",author:"Ryan Opina",credential:"User Experience Designer, Engine Digital",type:"video",priority:1,template:"templates/youtube.html"},{embedCode:"CoDN3F389iA",author:"David Gratton",credential:"CEO, Work at Play",type:"video",priority:1,template:"templates/youtube.html"},{embedCode:"KkDDQryoQyw",author:"Jesse Spink",credential:"Creative Director, Ayogo",type:"video",priority:1,template:"templates/youtube.html"},{embedCode:"AZ0GAAXvCkc",author:"Andrew Harnden",credential:"CSO, Work at Play",type:"video",priority:1,template:"templates/youtube.html"},{quote:"Run, not walk, to the nearest interactive program",author:"Kristen",credential:"Currently Enrolled",embedCode:"Kb_VUNhdGpU",type:"video__with-quote",priority:1,template:"templates/youtube.html"},{embedCode:"smT_rI_hQiM",quote:"The goal is to put people in the work force and be employable, we look to these programs for our new stars.",author:"Jason Bailey",credential:"CEO, East Side Games",imageUrl:"people/jason-bailey.jpg",type:"video__with-quote",priority:4,template:"templates/youtube.html"},{quote:"People from the INTE program come ready to wear many hats. Cutting this program would leave a big gap.",author:"Josh Nilson",credential:"COO, East Side Games",imageUrl:"people/josh-nilson.jpg",embedCode:"kJcPCIAGfeY",type:"video__with-quote",priority:6,template:"templates/youtube.html"},{author:"Collin Stewart",credential:"Founder, VoltageCRM",embedCode:"LUiP5q2X_fU",type:"video",priority:7,template:"templates/youtube.html"},{embedCode:"4W5sBDRcZvA",author:"Myles Galvin, BBA",type:"video",priority:6,template:"templates/youtube.html"},{embedCode:"PRfYP8-CraU",author:"Courtney Inman",type:"video",priority:4,template:"templates/youtube.html"},{embedCode:"KyhzOiviZlg",type:"video",priority:4,template:"templates/youtube.html"},{embedCode:"Tai8WRDpWOc",type:"video",priority:6,template:"templates/youtube.html"}];var t=[].concat(e.quoteBoxes).concat(e.photoBoxes).concat(e.vineBoxes).concat(e.youtubeBoxes);e.heroBoxes=t.sort(function(e,t){return parseFloat(e.priority)-parseFloat(t.priority)})}]),saveINTEapp.controller("heroBoxController",["$scope",function(e){e.playVideo=function(e){("video__with-quote"==e.type||"video"==e.type)&&(e.state="s-playing");var t=$("#youtube--"+e.embedCode);t.attr("src",t.attr("src")+"&autoplay=1")}}]),saveINTEapp.controller("petitionController",["$scope",function(e){e.signatures=966;var t="3183c8e44803aa6f8721e6990b1d94423ee6d35b0ca6927ec5f7a2d10fac5e97",o="https://api.change.org/v1/petitions/1106511/signatures",a="https://www.change.org/en-CA/petitions/capilano-university-save-the-interactive-design-program",r={api_key:t,petition_url:a};$.ajax({url:o,dataType:"jsonp",type:"GET",data:r,success:function(t){e.$apply(function(){e.signatures=t.signature_count})}})}]);