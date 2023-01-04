"use strict";(self.webpackChunkbuchla=self.webpackChunkbuchla||[]).push([[9117],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>c});var a=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function s(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function n(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?s(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):s(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,r=function(e,t){if(null==e)return{};var o,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)o=s[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var l=a.createContext({}),h=function(e){var t=a.useContext(l),o=t;return e&&(o="function"==typeof e?e(t):n(n({},t),e)),o},u=function(e){var t=h(e.components);return a.createElement(l.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var o=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=h(o),p=r,c=m["".concat(l,".").concat(p)]||m[p]||d[p]||s;return o?a.createElement(c,n(n({ref:t},u),{},{components:o})):a.createElement(c,n({ref:t},u))}));function c(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=o.length,n=new Array(s);n[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[m]="string"==typeof e?e:r,n[1]=i;for(var h=2;h<s;h++)n[h]=o[h];return a.createElement.apply(null,n)}return a.createElement.apply(null,o)}p.displayName="MDXCreateElement"},2303:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>l,contentTitle:()=>n,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>h});var a=o(7462),r=(o(7294),o(3905));const s={},n=void 0,i={unversionedId:"200e/presetmanager-dbjd",id:"200e/presetmanager-dbjd",title:"presetmanager-dbjd",description:"The Preset Manager (225e or 206e):",source:"@site/docs/200e/presetmanager-dbjd.md",sourceDirName:"200e",slug:"/200e/presetmanager-dbjd",permalink:"/buchla_doc/docs/200e/presetmanager-dbjd",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Model 259e Twisted Waveform Generator",permalink:"/buchla_doc/docs/200e/259e"},next:{title:"The 200 Series Reissue",permalink:"/buchla_doc/docs/category/the-200-series-reissue"}},l={},h=[{value:"In addition to the firmware version, this action displays a module&#39;s I.D. (if applicable)",id:"in-addition-to-the-firmware-version-this-action-displays-a-modules-id-if-applicable",level:5},{value:"Firmware Updating: When to consider reprogramming your module:",id:"firmware-updating-when-to-consider-reprogramming-your-module",level:5},{value:"Now that you know the software version of your module, you can compare your software to the software versions compiled on the Buchla website. Consider updating your module if you have an older software version.",id:"now-that-you-know-the-software-version-of-your-module-you-can-compare-your-software-to-the-software-versions-compiled-on-the-buchla-website-consider-updating-your-module-if-you-have-an-older-software-version",level:5},{value:"Or perhaps something has occurred that has caused your module to go haywire.",id:"or-perhaps-something-has-occurred-that-has-caused-your-module-to-go-haywire",level:5},{value:"Updating a module&#39;s firmware:",id:"updating-a-modules-firmware",level:5}],u={toc:h};function m(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"The Preset Manager (225e or 206e):")),(0,r.kt)("p",null,"Sharing the same panel on a 225e or 206e, but completely independent of the mixer or the MIDI Interface, is a facility dedicated to Managing Presets and to Firmware Updating. First, we'll deal with Managing Presets:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"How it works:")),(0,r.kt)("p",null,'Each 200e series module has a built-in processor that can read that module\'s knob settings and switch positions. The "store" command from the Preset Manager tells the module to store this data in the module\'s LOCAL memory. Associated settings are restored when the module gets a with a preset number. The "recall" command from the Preset Manager tells the module to restore the settings associated with that preset number. The Preset Manager stores no module data other than its own list of preset names and global settings.'),(0,r.kt)("p",null,"A user can store up to 30 presets with each being retrieved when the preset manager transmits the recall message with number 1-30 to all the modules in a system. If you have multiple modules--all with remote enabled--they respond in sync as kind of global preset."),(0,r.kt)("p",null,"Memory card storage works with a message from the Preset Manager telling each module to send data directly from the module to the memory card or vice-versa. The Preset Manager again never stores that data."),(0,r.kt)("p",null,'"Knob Catching"to resolve differences in visible knob settings with recalled patches:'),(0,r.kt)("p",null,'Obviously a knob without a motor will not move to indicate it\'s change when a preset is recalled. Therefore it has a mechanically (indicated) value, but what we experience sonically is the underlying (virtual) value. The dilemma is resolved by persuading the virtual value to "catch up" with the indicated value. When you move a knob, this virtual value will change faster or slower than normal, but in the same direction as you turned the knob, eventually causing the virtual and indicated values to agree. Some modules implement an earlier version of the knob catcher, doing nothing until the user catches the underlying value.'),(0,r.kt)("p",null,"Switch settings are simpler; LED's show the true status of each switch."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"DATA MODE SWITCH:")),(0,r.kt)("p",null,'Press the switch under the word "DATA" to cycle through the various programming modes and displays. Now choose "select".'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Select mode:")," Storing the preset:"),(0,r.kt)("p",null,"Say you found that mouth-watering sound you want to save for posterity (or at least tomorrow's gig). Here's how to save it as a preset:"),(0,r.kt)("p",null,"The first line of the LCD display will contain the current (last recalled) preset number followed by a name (if named). The second line points to a memory"),(0,r.kt)("p",null,"location (from 1 to 30). Use the data wheel to select a memory location for your preset---and with the system's modules remotes enabled--press the store button."),(0,r.kt)("p",null,"If the 206e / 225e's \"",(0,r.kt)("em",{parentName:"p"},'store"')," switch is pressed, the current state of modules with remotes enabled will be read into the current memory location. Parameters can then be altered by moving knobs or switches, but this will not alter the underlying stored values until store is pressed again. An LED indicates that the current preset is not stored."),(0,r.kt)("p",null,"Selecting/Recalling a Preset:"),(0,r.kt)("p",null,'Selecting a preset is equally simple. With remotes enabled, choose a desired preset with the data wheel and hit "recall". The chosen preset will appear in the first line of the display (the "current" preset), and your system will assume the appropriate state.'),(0,r.kt)("p",null,'The switches "last and "next" can also be used to instantly recalls the preset from memory.'),(0,r.kt)("p",null,'Pulse inputs can also but used in this same way. (See "Pulse input modes" in global settings. This can be use to create chain of presets.'),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note: You can selectively decide NOT to store or recall parameters on a particular module by NOT having that module remote enabled. This is very useful when coming up with variations of one preset"),"."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Name mode:")," Naming the Preset:"),(0,r.kt)("p",null,'Once stored in memory, a preset may be named (or renamed). To name the preset, hit the mode switch, illuminating the "name" LED. Use the "last" and "next" switches to direct the cursor position, and the data wheel to select desired characters. When naming is complete, typically you return to "select". But let\'s explore the global setting.'),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Global mode")," : Global settings and memory card functions"),(0,r.kt)("p",null,"You can use the mode switch to display three displays of that global option that apply to the system. ",(0,r.kt)("em",{parentName:"p"},"(This section assumes you have the Primo version of the hardware and software.)")),(0,r.kt)("p",null,'Global settings: The first global display controls the setting and clearing of the remote status of ALL the modules in a system. The command is sent when the cursor is in the status field and the data wheel is turned. This is a convenient way to change the system status with a single knob. Use the "next" key to cursor to the Disp field and set the LCD contrast contrast for both the preset manager and the MIDI decoder for best viewing.'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Rem Stats: Disp:2**")," Base Channel: 16**")))),(0,r.kt)("p",null,"The next global entry is the base channel. The preset manager responds to MIDI program change messages received on the specified base channel."),(0,r.kt)("p",null,"Pulse input modes: Push the mode switch again. You can now choose how the pulse inputs work. The simplest selection is \\<-Last","_","Next-",">",'. Pulse inputs will act the same as the button press for "last" and "next". If instead you choose \\<-C.V.',"_","Samp-",">"," then the left pulse input acts as a CV input for random access of presets based on the voltage when the left pulse input receives a pulse. (We are overipening the orange banana into functioning like a black banana. Your results may vary. It is recommended to use \\<-Last","_","Next-",">"," when possible.)"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"\\<- Last Next -",">","**")," Format Card**")))),(0,r.kt)("p",null,"Memory card functions:"),(0,r.kt)("p",null,'Formatting a card: A facility exists to store presets on a memory card. If the card is new, it must be formatted, accomplished by inserting it in the memory socket, moving the cursor to "format card" and rotating the data switch. Formatting a card also erases the card, so be careful when formatting cards.'),(0,r.kt)("p",null,"Push the mode switch again: The next entry allows one to move presets or groups of presets. Pick the desired range for the source presets and the desired range for the target."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"16-30 to 1-15**")," Copy Exchange**")))),(0,r.kt)("p",null,'Make your choice, choose "Copy" or "Exchange" , and turn the data wheel.'),(0,r.kt)("p",null,'Backing up your system: By far the simplest procedure to preserve the settings in your systems is to do a full backup of all the parameters in modules and their associated presets Do this by using "Restore from Card" or "Backup to Card".'),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Restore from crd**")," Backup to card**")))),(0,r.kt)("p",null,"Why consider a backup of your system's parameters:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"in unforeseen events leading to theft or damage of a single module or system, you still have a means of recovering your work."),(0,r.kt)("li",{parentName:"ol"},"If you need to firmware reprogram a single module and want to save it's saved contents before reprogramming."),(0,r.kt)("li",{parentName:"ol"},'If you want to share your awesome sequence with a friend, you can save the contents of your module as yours but in a different system\u2014by backing up your single module and restoring that single module in the other system. Of course this will only work if it\'s set to the same module ID (see "The module ID" section below for a description)')),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Notes on how a system stores its memory:"),"\n",(0,r.kt)("em",{parentName:"p"},"It's important to know that the preset memory is stored on the module itself; It is NOT saved on the preset manager. If a module is removed, it still retains its own memory. The preset manager merely tells a module to dump its memory to the card. The module receives this message if it is remote enabled.\nEach e-module has a computer and memory storage, but no shared memory. A memory card has a dedicated area of storage for each e-module number and module ID.")," ",(0,r.kt)("em",{parentName:"p"},"The PO Box analogy:")," ",(0,r.kt)("em",{parentName:"p"},"The module number and module ID is the address; The memory card is the collection of mailboxes; The preset manager is the postmaster. When you")," ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"backup")," ")," ",(0,r.kt)("em",{parentName:"p"},"presets, first ALL the mailboxes get emptied, then each remote-enabled-module puts a copy of its memory into its one preassigned/addressed box. But when you")," ",(0,r.kt)("em",{parentName:"p"}," ",(0,r.kt)("strong",{parentName:"em"},"restore")," __, the memory copies in those boxes remains regardless of which module is told to look at the copy of its memory. The postmaster/preset manager never looks at what's in the boxes, and only modules with remote enabled are told to copy what is stored on the card. That's why it's smart to backup all your modules at once, but restore only one at a time as needed.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Sofware versions, Module ID's and Firmware updating**"),".**"),(0,r.kt)("p",null,"Reading the software version and module ID: A sustained press on most module's remote enable switch","*"," will display the module's current software version on the preset manager's LCD."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"*",'Exceptions: There are some exceptions to the remote enable switch. One exception is the Preset Manager. Lacking a remote switch, we use the "select" switch to accomplish the same function. For the 281h Use the quadrature switch. Likewise the 281e \u2013 this module has two computers, both requiring the same software. For the upper computer, push the "Quadrature A-B" switch, and for the lower use the "Quadrature C-D"switch. Another special case is the 256e. This module also has two computers executing identical software. Access the top one by pressing the "A" breakpoint switch and the bottom one by pressing the "C" breakpoint switch. The 285e is an exception with 2 computers but with different software\u2013 use the reference select switches to select the section you\'d like to deal with.')),(0,r.kt)("h5",{id:"in-addition-to-the-firmware-version-this-action-displays-a-modules-id-if-applicable"},"In addition to the firmware version, this action displays a module's I.D. (if applicable)"),(0,r.kt)("p",null,"The module ID:"),(0,r.kt)("p",null,"The preset manager and the internal bus communicate with each module independently. Each module knows what kind of module it is and what internal messages to listen for. But we expect multiples of some modules in a system and for those modules there also is a module ID. (Having up to four 261e's are the most obvious example.) The only way to tell these modules apart is with a module ID. It's important for backups to memory cards so modules can be independently identified. The previous section also describes how module ID's are important for assignment on the internal bus. DIP switches on the back of these modules allow a technician to easily change the module ID if it has one. If you bought the module as part of a system, these are set at the factory for you, but it can be altered by the user as necessary. Contact Buchla for instructions."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Note about conflicting/shared module IDs: The parameters of a module are saved with that module and associated with a preset number. Similar modules with shared/conflicting module ID's will not overwrite each others saved parameter if a memory card is not used. And If a crazy and highly unusual system required conflicting module ID's\u2014a system with MORE than 4 oscillators of the same type (e.g. five 259e's) in one system, or any multiples of modules without a module ID--you can still use them independently in a system. But to save the contents of each module on a memory card, but you'd have to turn remote enable off for the conflicting module(s) IDs before doing backups and restores from the card. A 2__nd")," ",(0,r.kt)("em",{parentName:"p"},"memory card would have to be used to if you wanted to store the other same ID module.")),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Also note that some h-series modules like the 292h 281h are simply half of their e-series counterpart (e.g.292e,281e) and therefore need unique module IDs if the h-series and e-series versions are together in one system.")),(0,r.kt)("h5",{id:"firmware-updating-when-to-consider-reprogramming-your-module"},"Firmware Updating: When to consider reprogramming your module:"),(0,r.kt)("h5",{id:"now-that-you-know-the-software-version-of-your-module-you-can-compare-your-software-to-the-software-versions-compiled-on-the-buchla-website-consider-updating-your-module-if-you-have-an-older-software-version"},"Now that you know the software version of your module, you can compare your software to the software versions compiled on the Buchla website. Consider updating your module if you have an older software version."),(0,r.kt)("h5",{id:"or-perhaps-something-has-occurred-that-has-caused-your-module-to-go-haywire"},"Or perhaps something has occurred that has caused your module to go haywire."),(0,r.kt)("h5",{id:"updating-a-modules-firmware"},"Updating a module's firmware:"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},'You can find the programs and more complete instructions for downloading and updating a module\'s firmware on the Buchla website under "downloads".')," Below is only a summary of what you might expect to perform once you've successfully downloaded your software updates."),(0,r.kt)("p",null,"Updating a module's firmware involves shutting down the system and inserting the Firmware card. Then, while pressing and holding the target module's remote enable button/switch (or its substitute","*","), turning on the system power. After two or three seconds, release the switch. The new firmware will be transferred to the selected module. The procedure will take up to two minutes. When finished, the module will assume its initial state. (If you have a 292e, you may see indication of any programming within the system on it' blue LED.) Wait up to two minutes or until the module's lights return to their normal state."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"See ","*","Exceptions to the remote enable are mostly for")," ",(0,r.kt)("em",{parentName:"p"},"modules with 2 processors and therefore 2 programming procedures.")," ",(0,r.kt)("em",{parentName:"p"},"The same switch that when held displays the module's firmware and module ID also substitutes for the remote enable switch in Firmware updating procedures. One exception: The 225h does not report it's firmware version but firmware can loaded by connecting the input of the gate-to-pulse converter on the upper left of the module to a voltage ",">",'2.5v (e.g., the output of the Euro-to-Buchla CV processor on the 225h with the pot offset set to 5v and banana cable from the blue "out" jack to the white banana jack).')))}m.isMDXComponent=!0}}]);