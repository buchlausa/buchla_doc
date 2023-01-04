"use strict";(self.webpackChunkbuchla=self.webpackChunkbuchla||[]).push([[4191],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(7294);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,s=function(e,t){if(null==e)return{};var n,a,s={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var r=a.createContext({}),u=function(e){var t=a.useContext(r),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(r.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,s=e.mdxType,i=e.originalType,r=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=u(n),d=s,m=p["".concat(r,".").concat(d)]||p[d]||h[d]||i;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var r in t)hasOwnProperty.call(t,r)&&(o[r]=t[r]);o.originalType=e,o[p]="string"==typeof e?e:s,l[1]=o;for(var u=2;u<i;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},3359:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(7462),s=(n(7294),n(3905));const i={},l="Model 252e Polyphonic Rhythm Generator",o={unversionedId:"200e/252e",id:"200e/252e",title:"Model 252e Polyphonic Rhythm Generator",description:"The 252e sequences pulse patterns and CV values stored in the cells of eleven concentric rings. Ring cells resemble the stages of more conventional sequencers, but the architecture of the 252e allows for interesting and unusual possibilities not previously available. Four pulse outputs and six CV outputs can be assigned freely amongst the cells. Each of the three clocks can be assigned to any of the 11 rings and synchronized to generate two- and three-part polyrhythms and polymetric patterns. Pulses and CVs can be shifted independently within a ring. Pitch and velocity CV pairs can be captured from MIDI input \u2013 while editing and during performance. The 252e can synchronize to - or generate - MIDI clock. A Euclidian pattern generator is included to serve as a rhythmic library.",source:"@site/docs/200e/252e.md",sourceDirName:"200e",slug:"/200e/252e",permalink:"/buchla_doc/docs/200e/252e",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"251e Quad Sequential Voltage Source",permalink:"/buchla_doc/docs/200e/251e"},next:{title:"256e-md",permalink:"/buchla_doc/docs/200e/256e-md"}},r={},u=[],c={toc:u};function p(e){let{components:t,...n}=e;return(0,s.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h1",{id:"model-252e-polyphonic-rhythm-generator"},"Model 252e Polyphonic Rhythm Generator"),(0,s.kt)("p",null,"The 252e sequences pulse patterns and CV values stored in the cells of eleven concentric rings. Ring cells resemble the stages of more conventional sequencers, but the architecture of the 252e allows for interesting and unusual possibilities not previously available. Four pulse outputs and six CV outputs can be assigned freely amongst the cells. Each of the three clocks can be assigned to any of the 11 rings and synchronized to generate two- and three-part polyrhythms and polymetric patterns. Pulses and CVs can be shifted independently within a ring. Pitch and velocity CV pairs can be captured from MIDI input \u2013 while editing and during performance. The 252e can synchronize to - or generate - MIDI clock. A Euclidian pattern generator is included to serve as a rhythmic library."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Anatomy")),(0,s.kt)("p",null,"The 252e consists of 5 primary functional areas (roughly clockwise from the top-right):"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"CV output and editing"),(0,s.kt)("li",{parentName:"ul"},"Display layer selection"),(0,s.kt)("li",{parentName:"ul"},"Clock assignment and synchronization"),(0,s.kt)("li",{parentName:"ul"},"Cell selection and Euclidian pattern generation"),(0,s.kt)("li",{parentName:"ul"},"Pulse editing and output")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Quick Start")),(0,s.kt)("p",null,'The default preset is configured with the master clock assigned to the 4 beat ring. There are single Red, Green, and Blue pulses in cells 1, 2, and 3 of the ring respectively. If you press the "play/stop" button, the playhead-cursor will begin to step at the default 120 BPM and you\'ll see from the LEDs in the "PULSE OUTPUT" section that pulses are being performed at the expected times.'),(0,s.kt)("p",null,'To alter the BPM setting, turn the "MASTER BPM" knob. The value shown on the segmented display will begin blinking to indicate that you have deviated from the current BPM. To apply the new BPM setting to the master clock, press the encoder down. The value will stop blinking to indicate that the displayed BPM value is now active.'),(0,s.kt)("p",null,"In the next sections, we will talk about the clocks and how to start creating your own patterns. It is wise to start simple. Enjoy your 252e."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basics: Clock Assignment")),(0,s.kt)("p",null,'The cells in a ring can only be performed when a clock is assigned to the ring to "drive" it. Clocks are assigned to rings using the clock assign knobs and buttons. The current clock assignment is indicated by an unblinking yellow ring number LED. A pending clock assignment is indicated by a blinking LED.'),(0,s.kt)("p",null,'To change the clock assignment, turn the "assign" knob until the blinking LED moves to the desired ring number. When you press the "assign" button, the LED begins blinking faster and the assignment is changed the next time cell 1 is performed for that ring. Try changing the master clock assignment by turning the "assign" knob and pressing the "assign" button. When the current ring arrives at cell 1, you\'ll see the play cursor jump to the new ring you\'ve assigned and being travelling around the ring.'),(0,s.kt)("p",null,"To turn off a clock assignment, turn the knob fully counter-clockwise until no LED is blinking and press assign."),(0,s.kt)("p",null,"Using multiple clocks and assigning them to rings allows the user to play with polyrhythmic or polymetric. But to get started it is highly recommended that you use one master clock alone. ",(0,s.kt)("strong",{parentName:"p"},"You can run 3 independent sequences with rhythmic complexity provided by subdivisions and pulse timing using just the one master clock.")," After you have discovered the full potential of the module using just the one master clock, then move on to using multiple clocks."),(0,s.kt)("p",null,'Clock assignments assigned using CVs and pulses. The CV input next to the "assign" knob selects the ring, and a pulse at the pulse input next to the "assign" button functions as that assign button and starts the assignment.'),(0,s.kt)("p",null,"Note the that CV input adds/is offset by the pot value. For instance, if the pot is selecting ring 11, then 0v at the CV input selects ring 11 and everything above 1.8v selects ring 16. To use a full 0-10 volt CV range for the 3-16 ring selection, turn the pot down."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Ring Display Modes: Basics")),(0,s.kt)("p",null,'The ring display at the center of the 252e can show four different sets of cell properties using the R/G/B color scheme. At power on time, the "pulses" view is displayed. Press the button in this DISPLAY section to see if data has been entered for CVs. The "pulses" layer indicates the presence of pulses in cells with the colors red, green, and blue (and their simple combinations). The "cv 1-3" layer shows the presence of CV assignments for outputs 1, 2 and 3 using the same R/G/B scheme. The "cv 4-6" and "subdiv" layers show CV outputs 4,5 and 6 as R/G/B, and cell subdivide pulses as Red. A fifth mode shows them all superimposed so you can see which cells are empty and which are occupied.'),(0,s.kt)("p",null,"Now cycle back to only displaying pulses. In the next section you'll learn how to add pulses to an empty ring."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Cell Editing: Pulses")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Moving the cell edit cursor")),(0,s.kt)("p",null,'Press the "edit" button to begin editing cell data. In cell edit mode the "edit" LED will be illuminated and a white blinking edit cursor will appear on the ring display. The edit cursor can be moved around the current ring using the "cell" rotary encoder. To switch rings use the "beats/cycl" encoder. When you switch rings, the encoder\'s neighboring segmented display will show the number of cells/beats in the selected ring.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Entering Pulses")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},"To assign a simple pulse")," to a cell, select the cell with the edit cursor and ",(0,s.kt)("strong",{parentName:"p"},'press one of the "red", "green", or "blue" pulse buttons'),'. The selected cell in the ring display will illuminate with the pulse color to show the assignment and the corresponding LED in the "PULSE OUTPUTS" section will also illuminate. Adding more than one pulse to the same cell will mix their colors. Pressing a pulse button a second time will remove the assignment.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Pulse duration:")),(0,s.kt)("p",null,"Using the ",(0,s.kt)("strong",{parentName:"p"},'"pulse duration" knob you can change the length of the pulses')," in a cell, anywhere from a short transient to a pulse sustained for the entire cell duration at the current BPM."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Editing: Editing CVs")),(0,s.kt)("p",null,"But the 252e is more than a pulse generator. All these cells can be associated with control voltages to be used pitches, timbres or, of course, dynamics."),(0,s.kt)("p",null,"Now press the display button to display the CV display modes."),(0,s.kt)("p",null,"To associate a CV value with a cell, select the cell with the blinking cell edit cursor as described above in ",(0,s.kt)("em",{parentName:"p"},"Pulses"),". Next ",(0,s.kt)("strong",{parentName:"p"},'press the "select" button in the "CV EDIT"')," section until the desired CV output is selected. ",(0,s.kt)("strong",{parentName:"p"},'Turn the encoder below the "select" button to assign a CV value.')," A fine tune mode is available by pressing the encoder down; press again to return to coarse CV edit mode. (Note: Typical Buchla oscillators are based on a1.2v per octave range, so .1v would equals a half-step. See Advanced Editing section for a quicker way to enter data via MIDI capture.)"),(0,s.kt)("p",null,"Up to six CV outputs (each with different values) can be assigned to any one cell. Remember that the outputs are shared, so if you assign the same CV output to 2 or more cells that are performed on different rings by different clocks at the same time, the result will be undefined."),(0,s.kt)("p",null,'The special "none" CV value, indicated on the segmented display by "- -" means the CV output will not be changed; it does not mean 0. For example, if you have 4 beat pattern but only want two alternating pitches using CV output 1, you can assign CV values to cells 1 and 3, and leave cells 2 and 4 with the "none" value. The output value when cell 1 is performed will remain unchanged by the "none" value in cell 2, then cell 3 will change the output value, and cell 4 will again leave it unchanged.'),(0,s.kt)("p",null,"Because traditional sequencers tend to operate with an assumed concept of a \"note\", it's important to emphasize here that there is no inherent relationship between pulses and CVs in the 252e. They can be assigned or not as you like. Cells can have pulses but no CVs, or CVs but no pulses. As you'll see below, CVs and pulses are both represented in the ring display as R/G/B colors, but that doesn't imply a functional relationship. For example, you ",(0,s.kt)("strong",{parentName:"p"},"can"),' create a single synth "voice" using the 252e where the Red pulse is the note on trigger, CV 1 is pitch, and CV 4 is velocity. We have made it convenient to organize the outputs this way because it\'s an obvious application when creating three voice polyrhythms using three rings at the same time. However many other logical organizations are possible and encouraged.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Editing: Other pulse outputs")),(0,s.kt)("p",null,"Now press the display button to display the subdivide display mode."),(0,s.kt)("p",null,'"Subdivide" output: Independent pulses with the ability to subdivide the cells in advanced ways'),(0,s.kt)("p",null,"This 4th pulse output is powerful rhythm generator all by itself independent from the other pulse outputs. It can be used exclusively with no other pulses programmed."),(0,s.kt)("p",null,'The "cell subdivide" section lets you create up to 7 pulses that will be performed during the course of the cell\'s duration. The button increments the number of pulses to perform from 0(none) to 7.'),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},'knob labeled "0-1/3-2/3-1" distributes these pulses in time over cell duration.')," Zero/Fully counter-clockwise is an equal time distribution starting on the downbeat; turning the knob squeezes the pulses closer and closer together and further and further towards the end of the cell's time domain."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"There is no indication for the cell's stored knob value, so you may need to use your ears and reprogram as necessary. Pressing \"Clear\" will also reset the timing of the cell and it's subdivision.")),(0,s.kt)("p",null,'Cell subdivide pulses ONLY appear at the "sub-div" jack in the "PULSE OUTPUTS" section. They are not associated or affected by the red, blue, green pulse outputs.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"WARNING: Subdivided pulses were intended to be played on only one ring at a time. At Buchla we would never restrict how you program your module, but programming subdivided pulses on multiple rings and clocking these rings simultaneously can severely impact the timing of the 252e.")),(0,s.kt)("p",null,'"cell 1" output: A pulse is simply sent out whenever the master clock gets to cell 1. This is very convenient for triggering at the start of a cycle.'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Editing: Cell timing control")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},'"behind/ahead" knob will cause a cell\'s start to be performed early or late')," relative to the cell's position in the sequence. This allows for more complex and subtle rhythmic variation. A red or green LED will indicate if a cell is already programmed ahead or behind when the editing cursor is on that cell. ",(0,s.kt)("strong",{parentName:"p"},"This affects all pulses, subdivide pulses and CV's in that cell.")," This will have an especially powerful effect on subdivide pulses since the length of the cell being subdivided will be altered."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},'Note: perhaps the panel label should have read "ahead/behind" since pot rotation to the left results in early pulses and clockwise rotation move the pulse later in time')),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Warning: If a cell is set to start very late and the next cell is set to start very early, the cells may try to start in the wrong order. If this happens that particular ring may freeze at this point")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Editing: The Phase Knob:")),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},'"phase" knob rotates cell data in the ring forwards or backwards by single cell increments.')," See the ",(0,s.kt)("em",{parentName:"p"},"Ring Display Modes")," section below for details about how data is rotated."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Basic Editing: Copy, Paste, Clear, and Pulse Fill")),(0,s.kt)("p",null,"When a cell is selected, pressing the ",(0,s.kt)("strong",{parentName:"p"},'"copy"')," button copies all of the cell's associated data: pulses, pulse timing, and CV assignments (which will be discussed next)."),(0,s.kt)("p",null,"As you might expect, the ",(0,s.kt)("strong",{parentName:"p"},'"paste"')," button replaces the currently selected cell's data with whatever was most recently copied. If you ",(0,s.kt)("strong",{parentName:"p"},'hold down the "paste" button and turn the "cell" rotary encoder')," , the paste will be repeated into each successive cell. See the ",(0,s.kt)("em",{parentName:"p"},"Ring Display Modes")," section below for details about how data is pasted."),(0,s.kt)("p",null,"The ",(0,s.kt)("strong",{parentName:"p"},'"clear"')," button will erase all cell data from the currently selected cell. If you ",(0,s.kt)("strong",{parentName:"p"},'hold the "clear" button and turn the "cell" encoder')," , the erasure will be repeated in each cell. See the ",(0,s.kt)("em",{parentName:"p"},"Ring Display Modes")," section below for details about how data is cleared."),(0,s.kt)("p",null,"As a convenience when editing pulses, you may ",(0,s.kt)("strong",{parentName:"p"},"hold down")," one or more of the ",(0,s.kt)("strong",{parentName:"p"},"R/G/B buttons")," and ",(0,s.kt)("strong",{parentName:"p"},'turn the "cell" encoder to fill')," adjacent cells with pulses."),(0,s.kt)("p",null,'And even more convenient way to quickly fill a circle with pulses, is to generate pulses that create patterns based on "Euclidian Rhythms."'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Euclidian Rhythms")),(0,s.kt)("p",null,"The Euclidean rhythm in music was discovered by ",(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Godfried_Toussaint"},"Godfried Toussaint"),' in 2004 and is described in detail in the 2005 paper "The ',(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Euclidean_algorithm"},"Euclidean Algorithm"),' Generates Traditional Musical Rhythms". The ',(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Greatest_common_divisor"},"greatest common divisor")," of two numbers is used ",(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Rhythm"},"rhythmically")," giving the number of ",(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/Beat_(music)"},"beats")," and silences, generating almost all of the most important ",(0,s.kt)("a",{parentName:"p",href:"http://en.wikipedia.org/wiki/World_Music"},"World Music")," rhythms (except Indian additive rhythms)."),(0,s.kt)("p",null,'To automatically generate pulse patterns using the Euclidian algorithm, select a ring using the "beats/cycl" encoder, and press the "RHYTHM SELECT" button to select "Euclidian". ',(0,s.kt)("strong",{parentName:"p"},"NOTE: this is a destructive operation")," , any pulse data in the selected ring will be erased and replaced by the Euclidian solution rendered in red pulses (however, other pulses can be added, see the ",(0,s.kt)("em",{parentName:"p"},"Advanced Editing")," section below).\n",(0,s.kt)("strong",{parentName:"p"},"To add pulses colors other than red, hold the green or blue buttons while selecting the pattern#.")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Turn the "pattern #" encoder to generate each of the Euclidian pulse patterns for the number of beats in the selected ring.')," The number of pulses in the current solution will be shown on the segmented display to the left of the encoder."),(0,s.kt)("p",null,'To exit Euclidian mode, press the "RHYTHM SELECT" button, or turn the "beats/cycl" encoder to select a different ring. (Note: editing other parameters is not possible while in Euclidian mode, so to avoid confusion, the 252e automatically reselects the "user-defined" edit mode.)'),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Using Multiple Clocks: Synchronization")),(0,s.kt)("p",null,'Press the "sync" button to change the clock synchronization method.'),(0,s.kt)("p",null,"Sync ",(0,s.kt)("strong",{parentName:"p"},'mode "on 1" means that cell 1 of all active rings will happen at the same time'),". The master clock will run at the indicated BPM, and clocks two and three will drive their assigned rings at whatever rate is necessary to get the ring to cell 1 on time."),(0,s.kt)("p",null,"Sync mode ",(0,s.kt)("strong",{parentName:"p"},'"on cycl" means that all cells will advance at the same rate.')),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'If neither sync LED is illuminated, the clocks are not synced. In this mode you can press and hold the "assign / \u2206t" button for a clock to enable its time scaling mode'),". In this mode, the green LED is illuminated and the clock knob will scale the master BPM, from .5x \u2013 3x, as does the knob's associated CV input."),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'Pressing the "reset" button will force all active rings to resync at cell 1'),"."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"}," ",(0,s.kt)("strong",{parentName:"em"},"Multiple clocks but single outputs!")," ")," ",(0,s.kt)("em",{parentName:"p"},"Things to keep in mind:")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"When using multiple clocks it is easy to get confused with overlaid pulses and CV outputs if you use the same color (Red/Blue/Green) pulse or CV assignments on those multiple rings. For instance, if you program red pulses on multiple rings and but play those rings simultaneously with 3 clocks, all the data for three rings will be sent to that one pulse output. This might be musically interesting, but can also overwhelm the outputs at fast BPMs. (If you filled up all the cells you would be playing 30 layers of data simultaneously when clocking with 3 clocks.)")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"The least confusing way to play with polyrhthyms and polymeters is to associate specific rings with specific colors/outputs and assign clocks to those rings accordingly.")),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Ring Display Modes: Editing")),(0,s.kt)("p",null,'Having different display layers helps one to visualize where the various kinds of cell data has been assigned in the rings, but it also affects certain editing procedures. The "paste", "clear", and "phase" controls affect only the data associated with the current display layer. So for example, if you press the "clear" button when the "subdiv" display mode is active, only the cell subdivide pulses will be erased from the current cell. Similarly with the other controls and display modes. If you want to duplicate only the CV data for outputs 1, 2 and 3 from one ring into another, you can copy and paste while the "cv 1-3" is active. In fact, ',(0,s.kt)("strong",{parentName:"p"},"copy always copies the data from all layers, it is the paste function that's selective.")),(0,s.kt)("p",null,"This feature adds some complexity to the user interface of the 252e which may make things a little bit confusing for new users, but after a little bit of practice, its utility when editing and performing with complex arrangements will become apparent."),(0,s.kt)("p",null,"Let's suppose you choose to associate pulses and CVs together to describe a set of three traditional synth voices. In this scheme, the red, green, and blue pulse outputs would represent note on triggers; red for voice 1, green for voice 2, and blue for voice 3. CV outputs 1, 2, and 3 would represent pitch, and CV outputs 4, 5, and 6 would represent note velocity. A simple application would be to use three different rings, perhaps ring 4 containing only red pulses, ring 7 containing only green pulses, and ring 16 containing only blue pulses. Next you would enter pitch data for ring 4 by adding CV values for output 1; then pitch data for ring 7 using CV output 2; and finally pitch data on ring 16 using CV output 3. Then for velocity on ring 4 use CV output 4; ring 7 velocity on CV output 5, and velocity on ring 16 using CV output 6. This gives you three kinds of data on three different display/edit layers."),(0,s.kt)("p",null,'Using the display modes, you can now modify and shift the temporal relationships between rhythm, pitch, and velocity independently. For example, with the "pulses" layer selected, turning the "phase" knob will shift the rhythmic pattern in relationship to the pitch and velocity data. When combined with the "randomize" feature described below in the ',(0,s.kt)("em",{parentName:"p"},"Advanced Editing")," section, you can very quickly create musically expressive patterns and vary them in many interesting way."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Advanced Editing: Copying and pasting ranges")),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'To select a range of cells for copying, press and hold the "cell" encoder while turning it'),"."),(0,s.kt)("p",null,'After copying a range of selected cells, the paste operation will differ depending on whether you turned the "cell" knob clockwise or anti-clockwise when you selected the range: the pasted data will appear either forward from the current cursor, or backwards from it. Performing a few experiments will make this relationship more clear.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'The "red", "green", and "blue" buttons can be used as modifiers to apply editing operations to subsets of cell data'),'. For example, if you are in the "pulses" display mode, hold down the "red" button and turn the "cell" encoder to fill cells with red pulses. To clear the red pulses from the ring, hold the "red" button and "clear" and turn the "cell" encoder to remove only the red pulse from each cell. The R/G/B buttons can be combined in any manner.'),(0,s.kt)("p",null,'This same technique applies to CVs. In "cv 1-3" mode, holding down the "green" button and pressing "clear" will remove any CV data for output 2 in the currently selected cell. To clear the entire ring, hold "clear" and turn the "cell" encoder.'),(0,s.kt)("p",null,(0,s.kt)("strong",{parentName:"p"},'The R/G/B modifier buttons applies as well to the "phase" encoder and "paste" button')," , enabling selective transformations within a display layer."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Advanced Editing: Randomize")),(0,s.kt)("p",null,'An extension of the R/G/B button-as-modifier technique provides a randomize function. In the "pulses" display mode, ',(0,s.kt)("strong",{parentName:"p"},'holding down the "blue" button and pressing the "edit" button')," will fill the currently selected ring with a random pattern of blue pulses. This function also applies to CV values and cell subdivide pulses."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"Advanced Editing: MIDI Capture to CV")),(0,s.kt)("p",null,"Control voltage values can be captured and entered using MIDI note input received on the internal MIDI bus. To enable this mode, make sure you are playing notes on the internal bus. Then in cell edit mode, ",(0,s.kt)("strong",{parentName:"p"},'press and hold the "CV EDIT" encoder'),'. The display will change to "in" and both the LEDs for CV outputs 1 and 4 will illuminate. ',(0,s.kt)("strong",{parentName:"p"},"In this mode, the CV outputs are considered to be pitch/velocity pairs")," (1/4, 2/5, 3/6) and pressing select will cycle through the pairs. A MIDI note received on any channel will trigger a MIDI to CV value conversion where the note number and velocity are converted to CV range and stored in the currently selected cell's selected CV output pair."),(0,s.kt)("p",null,'Values can be entered manually by turning the "cell" encoder to select successive cells in the ring and then sending a MIDI note to capture the data. If you ',(0,s.kt)("strong",{parentName:"p"},'hold down the "cell" encoder, each MIDI note on also advances the current cell')," selection by one, so you can fill an entire ring with pitches by playing notes in sequence."),(0,s.kt)("p",null,(0,s.kt)("em",{parentName:"p"},"MIDI CLOCK")),(0,s.kt)("p",null,'The 252e supports MIDI clock sync receive and transmit. This is sent over the internal bus. To enable these modes, press and hold the "MASTER BPM" encoder. The display will change to "oFF". Turning the encoder selects "S rc" for "sync receive", and "S tr" for "sync transmit".'),(0,s.kt)("p",null,"Receiving: You can use external MIDI gear to send messages to the 252e through a 225e or through the FirmwareCard in USB MIDI I/O mode (225m) See the USB Firmware Card description at the beginning of this manual.\nTo transmit to MIDI Clock messages from the 252e to USB-MIDI, you can also use the Card."),(0,s.kt)("p",null,"Recalling and Saving Presets without a preset manager"),(0,s.kt)("p",null,"Combining the 252e with a preset manager is the recommended way to name, save and develop your sequences and rhythms. It is not uncommon to develop a set of patterns and make variations that can be recalled with a preset change."),(0,s.kt)("p",null,"But for users who have a small system with no preset manager, presets can be called up with MIDI preset commands that are sent over the internal MIDI bus using the FirmwareCard's USB MIDI I/O feature (called 225m) or the 225h. Patches are saved into that preset location by pressing the remote enable button. The LED will then go out."))}p.isMDXComponent=!0}}]);