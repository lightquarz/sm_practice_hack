(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[233],{9861:function(t,e,a){"use strict";a.r(e),a.d(e,{default:function(){return g}});var r=a(3445),n=a(1568),l=a(159),o=a(219),i=(a(7294),a(3905)),m=["components"],d={};function s(t){var e=t.components,a=(0,o.Z)(t,m);return(0,i.kt)("wrapper",(0,l.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",null,"HUD Modifications"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"/smhud.png",alt:"HUD Image"})),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Status display defaults to first enemy's HP, but can be configured to show Charge Timer, X-Factor timer, Shinespark timer and more (see InfoHUD Modes)"),(0,i.kt)("li",{parentName:"ol"},"Item collection percentage"),(0,i.kt)("li",{parentName:"ol"},"Number of E-tanks"),(0,i.kt)("li",{parentName:"ol"},"Current total energy (excluding reserves), sometimes overridden by status display contents."),(0,i.kt)("li",{parentName:"ol"},"Segment timer in minutes.seconds.frames. Resets when starting a new game, loading a preset, or by controller shortcut."),(0,i.kt)("li",{parentName:"ol"},"Timer in seconds.frames, resets when entering a new room and updates on item acquisition and room transitions. Can be set to realtime or gametime."),(0,i.kt)("li",{parentName:"ol"},"Lag frames, updates same as above"),(0,i.kt)("li",{parentName:"ol"},"Frames spent by last door transition")),(0,i.kt)("h1",null,"Controller Shortcuts"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"th"},"Controller 1")),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start + Select + L + R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Soft reset the game")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start + Select"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Opens the in-game menu (configurable in shortcuts menu)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"B"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Closes the in-game menu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Start + Y + L"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reloads the last used preset (configurable in shortcuts menu)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Controller 2")),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"L or R"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the status display options mentioned in 1")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Up"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Increases game speed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Down"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Decreases game speed")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Right"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Frame advance")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Left"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Restore game speed")))),(0,i.kt)("h1",null,"Menu Features"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("th",{width:"600"})),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Equipment")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Configure Samus' current equipment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Refill"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Refills your ammo and energy to their current max")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Category Loadouts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select a category to set your current equipment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Toggle Items"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle major items")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Toggle Beams"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle beams or activate glitched beams")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Current Energy"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set your current energy with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Energy Tanks"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select your max E-tanks with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Current Reserves"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set your current reserves with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reserve Tanks"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select your max Reserve Tanks with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Missiles"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select your max Missiles with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Super Missiles"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select your max Super Missiles with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Power Bombs"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select your max Power Bombs with left/right or A to increment")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Category Presets")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Presets are pre-configured savestates that are specific to a particular category.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Note"),": Presets load a room but do not load any enemies for that room.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Preset Options")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select a category or save/load custom presets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Select Preset Category"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select the desired category to be used with Category Presets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Custom Preset Slot"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select one of 40 slots in memory to save or load custom presets")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Save Custom Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Save a custom preset to the current slot in SRAM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Load Custom Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Load the custom preset in the current slot in SRAM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"A grapple sound effect will play if a preset cannot be loaded from the current slot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Teleport")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Warp to any save station")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Events")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle event flags for doors, bosses, items, and other events")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset All Events"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Clear all event flags")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset All Doors"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reset all door locks")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset All Items"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Replace all items that have already been collected")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Bosses"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle boss kills")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Misc")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle extra features")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Blue Suit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Give Samus the Blue Suit")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Flash Suit"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Give Samus the Flash Suit (aka Spike Suit)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Hyper Beam"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle Hyper Beam")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Goo Slowdown"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle ultra slow horizontal movement, as if grabbed by the Baby Metroid (2) or Draygon's goo (1-4)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Magic Pants"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle a flashing animation on Samus to show when dash should be held for short charging")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Space Pants"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle a flashing animation on Samus during a space jump to show when you should jump.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Note"),": If you have both Magic Pants and Space Pants on, only one of them will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If Space Jump is equipped then Space Pants will be used, otherwise Magic Pants will be used.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Loud Pants"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle sound effects for Magic Pants and Space Pants. Uses the sound selected in Game->Metronome SFX.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Note"),": If Magic and Space Pants are both turned off, this option has no effect.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Suit Properties"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Modify the suit properties similar to some randomizers")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Vanilla = No change, Varia has full heat protection and 50% enemy/environmental damage reduction, Gravity (with or without Varia) has full heat protection and 75% enemy/environment damage reduction)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Balanced = Varia now has 75% environmental damage reduction, Gravity (without Varia) has no heat protection and no environment damage reduction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Progressive = Varia has no changes, Gravity (without Varia) has half heat protection and 50% enemy/environmental damage reduction")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Invincibility"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Prevents Samus from taking damage or knockback")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Kill Enemies"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Kills all non-solid enemies in the current room")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Force Samus to Stand Up"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Forces Samus into a standing pose")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Infohud")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Configure the HUD")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Infohud Mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select the value from RAM to be displayed in the bottom-left of the HUD.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("a",{parentName:"td",href:"/infohudmode"},"Click the link for more details."))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Room Strat"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select which Room Strat to be displayed in the bottom-left of the HUD.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},'This only works if "Room Strat" is selected as the above Infohud Mode.')),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Top-Left Display"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose item collection percentage or reserve energy to be displayed at the top-left of the HUD.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Frame Counters"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle the room timer in the top-right of the HUD between realtime and gametime.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset Segment in Next Room"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the segment timer to reset automatically when exiting the next door transition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Status Icons"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle icons to appear when standing on an elevator or when the shine timer is active (e.g. while carrying a spikesuit).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Artificial Lag"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Select a value to adjust how much lag occurs during normal gameplay.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"This is to compensate for the lack of a minimap on the HUD which would normally consume CPU cycles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Customize RAM Watch"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Setup addresses to be monitored by the RAM Watch HUD mode. Address 1 will appear in the bottom-left corner of the HUD, while Address 2 appears just to the right of Address 1. Memory at these locations can be edited by configuring a Value and selecting 'Write to Address'. Toggle 'Lock Value' to automatically write the value once every frame. RAM Watch must must be the selected HUD mode to continue writing to the address. Only one byte of hex can be configured at a time in the menu. 'Hi' refers to the first byte, while 'Lo' refers to the second. Set the Hi Address to 0D and the Lo Address to EC to monitor the memory address $0DEC, which stores the counter for Samus direction changes while held by Draygon (among other uses).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Sprite Features")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Features that draw sprites over normal gameplay. Beware of CPU performance impact")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Samus on Top"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Draw Samus on top of foreground objects/tiles")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Show Samus Hitbox"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles an overlay of Samus hitbox that's drawn on top of Samus sprite.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Show Enemy Hitboxes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles an overlay of enemy hitboxes that are drawn on top of enemy sprite. Some enemies, especially bosses, use the extended spritemap format or are not compatible at this time")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Phan + Dray Hitboxes"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles an overlay of enemy hitboxes for enemies that use the extended spritemap format, such as Phantoon, Draygon, and Space Pirates.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Samus Projectile Hitbox"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles an overlay of Samus projectile hitboxes that are drawn on top of Samus projectile sprites.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Enemy Projectile Hitbox"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles an overlay of enemy projectile hitboxes that are drawn on top of enemy projectile sprites.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- OOB Tile Viewer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"This enables an overlay that shows the tiles near Samus at all times, disconnected from the camera. This allows you to navigate OOB (Out of Bounds) areas where neither Samus nor the actual tiles are visible in-game. Samus hitbox is drawn at the center of the overlay to show the position relative to the tiles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Game")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle game options")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Japanese/French Text"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard game option to toggle between English and Japanese text (NTSC) or between German and French text (PAL).")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Moon Walk"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard game option for Moon Walk.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Icon Cancel"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Standard game option for Icon Cancel.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Fanfare"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle the fanfare for collecting items")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Music"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggle the music off, on, or additional options:")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fast Off = Eliminates lag caused by loading music data, turning music back on will not work until the game loads music data again")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"LoadSaveOff = Experimental, skips loading music data when loading from a savestate, beware game may crash if you turn music on before the game loads music data again")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Low Health Alarm"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Modify the behavior of the low-health alarm")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Never = Self-explanatory")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Vanilla = No change (triggers on when <=30 health, off when >30 health, ignoring reserves, breaks if power bomb explosion is active)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"PB Fix = Defers trigger during power bomb explosions, which fixes issue where the alarm may not turn on or turn off")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"Improved = PB Fix + only triggers on with health+reserves is less than 30 (same requirements as initiating health bomb)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Debug Mode"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the debug mode. Note that debug mode shortcuts and features may not be well supported in the practice rom.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Debug CPU Brightness"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles a built-in debug feature to darken the screen after the game is done processing the next frame. Useful for estimating CPU usage.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- PAL Debug Movement"),(0,i.kt)("td",{parentName:"tr",align:"left"},"PAL-only feature that gives Samus extra movement correlated to the dpad input.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Enable Projectiles"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles a built-in debug feature to disable enemy projectiles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Fix Scroll Offsets"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Fixes the glitchy state where the camera and scroll offsets are out of sync, typically occurring when using major glitches")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Minimap"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Restores the game minimap, which also allows the pause menu map to be updated. When enabled, a map tile counter will also be displayed.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Clear Minimap"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Clears the map tile counter and all minimap data.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Metronome"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles a metronome feature that will play a sound at a periodic rate")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Metronome Tickrate"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of frames between metronome sounds")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Metronome SFX"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The sound to play (Beep, Power Beam, Spazer, Missile, Click)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"RNG Control")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Pre-determine boss patterns")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Rerandomize"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles rerandomizing of RNG values upon loading a savestate. SD2SNES/FXPak versions only.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Phan 1st Phase"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose the direction and eye opening pattern for Phantoon's first phase")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Phan 2nd Phase"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose the direction and eye opening pattern for Phantoon's second and subsequent phases")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Phan Eye Close"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose how long Phantoon's eye will remain open after a ring of flames")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Phan Flame Pattern"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose one of four patterns for Phantoon's flames")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Next Flame Pattern"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Swaps with Phan Flame Pattern each time Phantoon chooses a pattern")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Botwoon RNG"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose the opening pattern for Botwoon's first cycle")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Draygon from Right"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose Draygon's attack type from the right side of the room. Draygon will always 'swoop' after a 'goop'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Draygon from Left"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Choose Draygon's attack type from the left side of the room. Draygon will always 'swoop' after a 'goop'.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Crocomire RNG"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set Crocomire to always step forward, or always swipe and shoot projectiles.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Kraid Claw RNG"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set Kraid's claws to spawn above or below. Kraid is laggier when coming out of the ground if both claws spawn below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Note"),": It is not possible for both claws to spawn above Kraid, so there will always be some lag generated by a claw below.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"\xa0"),(0,i.kt)("td",{parentName:"tr",align:"left"})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("strong",{parentName:"td"},"Controller Shortcuts")),(0,i.kt)("td",{parentName:"tr",align:"left"},"Set or change button combinations for activating features. Press A to edit the shortcut and then hold the desired button combination until it turns pink.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Main Menu"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Open the InfoHUD menu")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Save State"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sets the savestate. SD2SNES/FXPak versions only.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Load State"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Loads the savestate. SD2SNES/FXPak versions only.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reload Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reload the last selected category preset")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Random Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Randomly chooses a preset from your selected preset category")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Save Cust Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Save a custom preset to the current slot in SRAM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Load Cust Preset"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Load the custom preset in the current slot in SRAM.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Next Preset Slot"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Increments the custom preset slot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Prev Preset Slot"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Decrements the custom preset slot.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset Seg Timer"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reset the segment timer. Takes effect immediately but only updates the display on certain events/actions.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Reset Seg Later"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Reset the segment timer. Takes effect when exiting the next door transition.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Full Equipment"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Refills your energy and ammo to their current max capacities.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Kill Enemies"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Instantly deletes all enemies in the current room.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Toggle OOB Tiles"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Toggles the OOB Tile Viewer.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Update Timers"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Updates the HUD timers immediately.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Clear Shortcuts"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Resets Main Menu shortcut to default and removes button combos for all others.")))),(0,i.kt)("h1",null,"Lag Frames"),(0,i.kt)("p",null,"Super Metroid runs at ~60 fps (NTSC) or ~50 fps (PAL). On each frame, the game simultaneously renders the current frame while preparing the next frame. If it fails to prepare the next frame in time, then the previous frame is rendered again. We call this a lag frame.\nThis means that game lag depends on how much work the CPU needs to do to prepare the next frame. It follows that any modification to game code could impact the game lag. Thus we need to balance the desire for practice ROM features with the desire for performance accuracy (matching the actual game lag).\n","\xa0",(0,i.kt)("br",{parentName:"p"}),"\n","You might be wondering how we were able to add features at all, since generally adding features means adding work. In fact even if a feature is toggled off, the game may have to check that the feature is toggled off and that is more work.\nFortunately it was discovered that the minimap adds a noticeable amount of work to each frame, and by disabling the minimap we freed up CPU for our features. In fact, we even had to add artificial lag in order to more closely match actual game performance.\nUnfortunately we weren't the only ones to notice this. Deer Force knew, and they also knew boss fights were laggy, so they disabled the minimap for most boss fights.\nAs a result, with default settings the practice ROM will have very similar lag compared to the actual game, except the practice ROM may have more lag during boss fights.\n","\xa0",(0,i.kt)("br",{parentName:"p"}),"\n","As we continue to maintain and add features to the practice ROM, this is our strategy for managing lag:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},(0,i.kt)("th",{width:"600"})),(0,i.kt)("th",{parentName:"tr",align:"left"}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Normal Gameplay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"With default settings (enemy HP selected in the infohud), we really try not to change lag. If we do, it will be communicated.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"}),(0,i.kt)("td",{parentName:"tr",align:"left"},"If you select other infohud or room strat options, lag may have a slight variance although it typically won't be noticeable.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Events"),(0,i.kt)("td",{parentName:"tr",align:"left"},"On events (when drops appear, when an item is collected, etc.), we may add features. It's conceivable this could add a lag frame, although in most circumstances it would be unlikely or impossible.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Door/Elevator Transitions"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Similar to events, we may add features during this time. Some features require data to be reloaded during this time.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Practice Features"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Once you start turning on practice features, lag may no longer be similar to actual game. Some features like magic pants or the metronome may not have much impact, but others like the OOB tile viewer add a significant amount of work for the CPU.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"- Sprite Patches"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Sprite patches such as SpriteSomething should be supported. These patches sometimes modify the game and theoretically could affect lag on their own, although if you intend to play the vanilla game or randomizer with a sprite patch then you might as well apply it to the practice ROM.")))),(0,i.kt)("br",null))}s.isMDXComponent=!0;var p=a(5893);function g(){return(0,p.jsx)(r.Z,{children:(0,p.jsx)(n.Z,{MarkdownComponent:s})})}},8211:function(t,e,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/help",function(){return a(9861)}])}},function(t){t.O(0,[122,774,888,179],(function(){return e=8211,t(t.s=e);var e}));var e=t.O();_N_E=e}]);