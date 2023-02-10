---
title: Sliding navigation demo - Canada.ca mandatory template - Canada.ca
---

<div class="alpha">
	<div class="gcweb-v2 test-gcweb-menu" typeof="SiteNavigationElement">
		<div class="gc-nav container visible-xs visible-sm">
			<ul aria-orientation="vertical" class="parent-list" role="menu">
				<li role="presentation">
					<a aria-controls="gc-mnu-jobs" aria-expanded="false" aria-haspopup="true" href="./themes/jobs.html" id="jobs" role="menuitem" data-ajax-after="themes/jobs.html #gc-mnu-jobs" tabindex="-1">Jobs</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-cit" aria-expanded="false" aria-haspopup="true" href="./themes/immigration.html" id="immigration" role="menuitem" data-ajax-after="themes/immigration.html #gc-mnu-cit" tabindex="-1">Immigration and citizenship</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-travel" aria-expanded="false" aria-haspopup="true" href="./themes/travel.html" id="travel" role="menuitem" data-ajax-after="themes/travel.html #gc-mnu-travel" tabindex="-1">Travel and tourism</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-biz" aria-expanded="false" aria-haspopup="true" href="./themes/business.html" id="business" role="menuitem" data-ajax-after="themes/business.html #gc-mnu-biz" tabindex="-1">Business</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-benny" aria-expanded="false" aria-haspopup="true" href="./themes/benefits.html" id="benefits" role="menuitem" data-ajax-after="themes/benefits.html #gc-mnu-benny" tabindex="-1">Benefits</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-health" aria-expanded="false" aria-haspopup="true" href="./themes/health.html" id="health" role="menuitem" data-ajax-after="themes/health.html #gc-mnu-health" tabindex="-1">Health</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-taxes" aria-expanded="false" aria-haspopup="true" href="./themes/taxes.html" id="taxes" role="menuitem" data-ajax-after="themes/taxes.html #gc-mnu-taxes" tabindex="-1">Taxes</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-enviro" aria-expanded="false" aria-haspopup="true" href="./themes/environment.html" role="menuitem" data-ajax-after="themes/environment.html #gc-mnu-enviro" tabindex="-1">Environment and natural resources</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-defence" aria-expanded="false" aria-haspopup="true" href="./themes/defence.html" role="menuitem" data-ajax-after="themes/defence.html #gc-mnu-defence" tabindex="-1">National security and defence</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-culture" aria-expanded="false" aria-haspopup="true" href="./themes/culture.html" role="menuitem" data-ajax-after="themes/culture.html #gc-mnu-culture" tabindex="-1">Culture, history and sport</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-policing" aria-expanded="false" aria-haspopup="true" href="./themes/policing.html" role="menuitem" data-ajax-after="themes/policing.html #gc-mnu-policing" tabindex="-1">Policing, justice and emergencies</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-trans" aria-expanded="false" aria-haspopup="true" href="./themes/transport.html" role="menuitem" data-ajax-after="themes/transport.html #gc-mnu-trans" tabindex="-1">Transport and infrastructure</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-canworld" aria-expanded="false" aria-haspopup="true" href="./themes/canada-world.html" role="menuitem" data-ajax-after="themes/canada-world.html #gc-mnu-canworld" tabindex="-1">Canada and the world</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-money" aria-expanded="false" aria-haspopup="true" href="./themes/money.html" role="menuitem" data-ajax-after="themes/money.html #gc-mnu-money" tabindex="-1">Money and finances</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-science" aria-expanded="false" aria-haspopup="true" href="./themes/science.html" role="menuitem" data-ajax-after="themes/science.html #gc-mnu-science" tabindex="-1">Science and innovation</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-indigenous" aria-expanded="false" aria-haspopup="true" href="./themes/indigenous.html" role="menuitem" data-ajax-after="themes/indigenous.html #gc-mnu-indigenous" tabindex="-1">Indigenous peoples</a>
				</li>
				<li role="presentation">
					<a aria-controls="gc-mnu-veterans" aria-expanded="false" aria-haspopup="true" href="./themes/veterans.html" id="veterans" role="menuitem" data-ajax-after="themes/veterans.html #gc-mnu-veterans" tabindex="-1">Veterans and military</a>
				</li>
			</ul>
		</div>
		<div class="gc-mnu visible-md visible-lg">
			<div class="row">
				<ul aria-orientation="vertical" class="parent-list col-md-4" role="menu">
					<li role="presentation">
						<button 
							aria-controls="gc-mnu" 
							aria-expanded="false" 
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/jobs.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/jobs"
										}
									]
								}
							]'
							id="jobs-lg" 
							role="menuitem" 
							tabindex="-1" 
							type="button"
						>Jobs</button>
					</li>
					<li role="presentation">
						<button 
							aria-controls="gc-mnu" 
							aria-expanded="false" 
							aria-haspopup="true" 
							data-wb-doaction='[
								{
									"action": "ajax", 
									"url": "themes/immigration.html #gc-mnu", 
									"container": "#gc-mnu-container", 
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/immigration"
										}
									]
								}
							]'
							id="cit-lg" 
							role="menuitem" 
							tabindex="-1" 
							type="button">Immigration and citizenship</button>
					</li>
					<li role="presentation">
						<button 
							aria-controls="gc-mnu"
							aria-expanded="false" 
							aria-haspopup="true" 
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/travel.html #gc-mnu", 
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/travel"
										}
									]
								}
							]' id="travel-lg" role="menuitem" tabindex="-1" type="button">Travel and tourism</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/business.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/business"
										}
									]
								}
							]' id="biz-lg" role="menuitem" tabindex="-1" type="button">Business</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/benefits.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/benny"
										}
									]
								}
							]' id="benny-lg" role="menuitem" tabindex="-1" type="button">Benefits</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/health.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},{
										"action": "patch",
										"source": "#contact",
										"patches": [
											{
												"op": "move",
												"path": "/current",
												"from": "/health"
											}
										]
									}
								]' id="health-lg" role="menuitem" tabindex="-1" type="button">Health</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/taxes.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/taxes"
										}
									]
								}
							]' id="taxes-lg" role="menuitem" tabindex="-1" type="button">Taxes</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu" 
							aria-expanded="false" 
							aria-haspopup="true" 
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/environment.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/environment"
										}
									]
								}
							]' id="enviro-lg" role="menuitem" tabindex="-1" type="button">Environment and natural resources</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/defence.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/defence"
										}
									]
								}
							]' id="defence-lg" role="menuitem" tabindex="-1" type="button">National security and defence</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/culture.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/culture"
										}
									]
								}
							]' id="culture-lg" role="menuitem" tabindex="-1" type="button">Culture, history and sport</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/policing.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/policing"
										}
									]
								}
							]' id="policing-lg" role="menuitem" tabindex="-1" type="button">Policing, justice and emergencies</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/transport.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/transport"
										}
									]
								}
							]' id="trans-lg" role="menuitem" tabindex="-1" type="button">Transport and infrastructure</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/canada-world.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/canada-world"
										}
									]
								}
							]' id="canworld-lg" role="menuitem" tabindex="-1" type="button">Canada and the world</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/money.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/money"
										}
									]
								}
							]' id="money-lg" role="menuitem" tabindex="-1" type="button">Money and finances</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/science.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/science"
										}
									]
								}
							]' id="science-lg" role="menuitem" tabindex="-1" type="button">Science and innovation</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/indigenous.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/indigenous"
										}
									]
								}
							]' id="indigenous-lg" role="menuitem" tabindex="-1" type="button">Indigenous peoples</button>
					</li>
					<li role="presentation">
						<button
							aria-controls="gc-mnu"
							aria-expanded="false"
							aria-haspopup="true"
							data-wb-doaction='[
								{
									"action": "ajax",
									"url": "themes/veterans.html #gc-mnu",
									"container": "#gc-mnu-container",
									"type": "replace"
								},
								{
									"action": "patch",
									"source": "#contact",
									"patches": [
										{
											"op": "move",
											"path": "/current",
											"from": "/veterans"
										}
									]
								}
							]' id="veterans-lg" role="menuitem" tabindex="-1" type="button">Veterans and military</button>
					</li>
				</ul>
				<div id="gc-mnu-container" class="col-md-8"><div id="target"></div></div>
            </div>
		</div>
	</div>
</div>
<!-- <div id="contact" data-wb-jsonmanager='{
	"url": "contextual.json",
	"name": "contextual",
	"wait": true
}'></div>
<ul data-json-replace='{
	"url": "#[contextual]/current/contextualFooter/links/0/url",
	"mapping": [
		{ 
			"selector": "a",
			"type": "attr",
			"attr": "href"
		}
	],
	"text": "#[contextual]/current/contextualFooter/links/0/text/"
	}'
>
	<template><li><a href></a></li></template>
</ul> -->
