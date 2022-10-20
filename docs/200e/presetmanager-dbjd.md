**The Preset Manager (225e or 206e):**

Sharing the same panel on a 225e or 206e, but completely independent of the mixer or the MIDI Interface, is a facility dedicated to Managing Presets and to Firmware Updating. First, we'll deal with Managing Presets:

**How it works:**

Each 200e series module has a built-in processor that can read that module's knob settings and switch positions. The "store" command from the Preset Manager tells the module to store this data in the module's LOCAL memory. Associated settings are restored when the module gets a with a preset number. The "recall" command from the Preset Manager tells the module to restore the settings associated with that preset number. The Preset Manager stores no module data other than its own list of preset names and global settings.

A user can store up to 30 presets with each being retrieved when the preset manager transmits the recall message with number 1-30 to all the modules in a system. If you have multiple modules--all with remote enabled--they respond in sync as kind of global preset.

Memory card storage works with a message from the Preset Manager telling each module to send data directly from the module to the memory card or vice-versa. The Preset Manager again never stores that data.

"Knob Catching"to resolve differences in visible knob settings with recalled patches:

Obviously a knob without a motor will not move to indicate it's change when a preset is recalled. Therefore it has a mechanically (indicated) value, but what we experience sonically is the underlying (virtual) value. The dilemma is resolved by persuading the virtual value to "catch up" with the indicated value. When you move a knob, this virtual value will change faster or slower than normal, but in the same direction as you turned the knob, eventually causing the virtual and indicated values to agree. Some modules implement an earlier version of the knob catcher, doing nothing until the user catches the underlying value.

Switch settings are simpler; LED's show the true status of each switch.

**DATA MODE SWITCH:**

Press the switch under the word "DATA" to cycle through the various programming modes and displays. Now choose "select".

**Select mode:** Storing the preset:

Say you found that mouth-watering sound you want to save for posterity (or at least tomorrow's gig). Here's how to save it as a preset:

The first line of the LCD display will contain the current (last recalled) preset number followed by a name (if named). The second line points to a memory

location (from 1 to 30). Use the data wheel to select a memory location for your preset---and with the system's modules remotes enabled--press the store button.

If the 206e / 225e's "_store"_ switch is pressed, the current state of modules with remotes enabled will be read into the current memory location. Parameters can then be altered by moving knobs or switches, but this will not alter the underlying stored values until store is pressed again. An LED indicates that the current preset is not stored.

Selecting/Recalling a Preset:

Selecting a preset is equally simple. With remotes enabled, choose a desired preset with the data wheel and hit "recall". The chosen preset will appear in the first line of the display (the "current" preset), and your system will assume the appropriate state.

The switches "last and "next" can also be used to instantly recalls the preset from memory.

Pulse inputs can also but used in this same way. (See "Pulse input modes" in global settings. This can be use to create chain of presets.

_Note: You can selectively decide NOT to store or recall parameters on a particular module by NOT having that module remote enabled. This is very useful when coming up with variations of one preset_.

**Name mode:** Naming the Preset:

Once stored in memory, a preset may be named (or renamed). To name the preset, hit the mode switch, illuminating the "name" LED. Use the "last" and "next" switches to direct the cursor position, and the data wheel to select desired characters. When naming is complete, typically you return to "select". But let's explore the global setting.

**Global mode** : Global settings and memory card functions

You can use the mode switch to display three displays of that global option that apply to the system. _(This section assumes you have the Primo version of the hardware and software.)_

Global settings: The first global display controls the setting and clearing of the remote status of ALL the modules in a system. The command is sent when the cursor is in the status field and the data wheel is turned. This is a convenient way to change the system status with a single knob. Use the "next" key to cursor to the Disp field and set the LCD contrast contrast for both the preset manager and the MIDI decoder for best viewing.

| **Rem Stats: Disp:2**** Base Channel: 16** |
| --- |

The next global entry is the base channel. The preset manager responds to MIDI program change messages received on the specified base channel.

Pulse input modes: Push the mode switch again. You can now choose how the pulse inputs work. The simplest selection is \<-Last\_Next-\>. Pulse inputs will act the same as the button press for "last" and "next". If instead you choose \<-C.V.\_Samp-\> then the left pulse input acts as a CV input for random access of presets based on the voltage when the left pulse input receives a pulse. (We are overipening the orange banana into functioning like a black banana. Your results may vary. It is recommended to use \<-Last\_Next-\> when possible.)

| **\<- Last Next -\>**** Format Card** |
| --- |

Memory card functions:

Formatting a card: A facility exists to store presets on a memory card. If the card is new, it must be formatted, accomplished by inserting it in the memory socket, moving the cursor to "format card" and rotating the data switch. Formatting a card also erases the card, so be careful when formatting cards.

Push the mode switch again: The next entry allows one to move presets or groups of presets. Pick the desired range for the source presets and the desired range for the target.

| **16-30 to 1-15**** Copy Exchange** |
| --- |

Make your choice, choose "Copy" or "Exchange" , and turn the data wheel.

Backing up your system: By far the simplest procedure to preserve the settings in your systems is to do a full backup of all the parameters in modules and their associated presets Do this by using "Restore from Card" or "Backup to Card".

| **Restore from crd**** Backup to card** |
| --- |

Why consider a backup of your system's parameters:

1. in unforeseen events leading to theft or damage of a single module or system, you still have a means of recovering your work.
2. If you need to firmware reprogram a single module and want to save it's saved contents before reprogramming.
3. If you want to share your awesome sequence with a friend, you can save the contents of your module as yours but in a different system—by backing up your single module and restoring that single module in the other system. Of course this will only work if it's set to the same module ID (see "The module ID" section below for a description)

_Notes on how a system stores its memory:_
_It's important to know that the preset memory is stored on the module itself; It is NOT saved on the preset manager. If a module is removed, it still retains its own memory. The preset manager merely tells a module to dump its memory to the card. The module receives this message if it is remote enabled.
 Each e-module has a computer and memory storage, but no shared memory. A memory card has a dedicated area of storage for each e-module number and module ID._ _The PO Box analogy:_ _The module number and module ID is the address; The memory card is the collection of mailboxes; The preset manager is the postmaster. When you_ _ **backup** _ _presets, first ALL the mailboxes get emptied, then each remote-enabled-module puts a copy of its memory into its one preassigned/addressed box. But when you_ _ **restore** __, the memory copies in those boxes remains regardless of which module is told to look at the copy of its memory. The postmaster/preset manager never looks at what's in the boxes, and only modules with remote enabled are told to copy what is stored on the card. That's why it's smart to backup all your modules at once, but restore only one at a time as needed._

**Sofware versions, Module ID's and Firmware updating****.**

Reading the software version and module ID: A sustained press on most module's remote enable switch\* will display the module's current software version on the preset manager's LCD.

_\*Exceptions: There are some exceptions to the remote enable switch. One exception is the Preset Manager. Lacking a remote switch, we use the "select" switch to accomplish the same function. For the 281h Use the quadrature switch. Likewise the 281e – this module has two computers, both requiring the same software. For the upper computer, push the "Quadrature A-B" switch, and for the lower use the "Quadrature C-D"switch. Another special case is the 256e. This module also has two computers executing identical software. Access the top one by pressing the "A" breakpoint switch and the bottom one by pressing the "C" breakpoint switch. The 285e is an exception with 2 computers but with different software– use the reference select switches to select the section you'd like to deal with._

##### In addition to the firmware version, this action displays a module's I.D. (if applicable)

The module ID:

The preset manager and the internal bus communicate with each module independently. Each module knows what kind of module it is and what internal messages to listen for. But we expect multiples of some modules in a system and for those modules there also is a module ID. (Having up to four 261e's are the most obvious example.) The only way to tell these modules apart is with a module ID. It's important for backups to memory cards so modules can be independently identified. The previous section also describes how module ID's are important for assignment on the internal bus. DIP switches on the back of these modules allow a technician to easily change the module ID if it has one. If you bought the module as part of a system, these are set at the factory for you, but it can be altered by the user as necessary. Contact Buchla for instructions.

_Note about conflicting/shared module IDs: The parameters of a module are saved with that module and associated with a preset number. Similar modules with shared/conflicting module ID's will not overwrite each others saved parameter if a memory card is not used. And If a crazy and highly unusual system required conflicting module ID's—a system with MORE than 4 oscillators of the same type (e.g. five 259e's) in one system, or any multiples of modules without a module ID--you can still use them independently in a system. But to save the contents of each module on a memory card, but you'd have to turn remote enable off for the conflicting module(s) IDs before doing backups and restores from the card. A 2__nd_ _memory card would have to be used to if you wanted to store the other same ID module._

_Also note that some h-series modules like the 292h 281h are simply half of their e-series counterpart (e.g.292e,281e) and therefore need unique module IDs if the h-series and e-series versions are together in one system._

##### Firmware Updating: When to consider reprogramming your module:

##### Now that you know the software version of your module, you can compare your software to the software versions compiled on the Buchla website. Consider updating your module if you have an older software version.

##### Or perhaps something has occurred that has caused your module to go haywire.

##### Updating a module's firmware:

**You can find the programs and more complete instructions for downloading and updating a module's firmware on the Buchla website under "downloads".** Below is only a summary of what you might expect to perform once you've successfully downloaded your software updates.

Updating a module's firmware involves shutting down the system and inserting the Firmware card. Then, while pressing and holding the target module's remote enable button/switch (or its substitute\*), turning on the system power. After two or three seconds, release the switch. The new firmware will be transferred to the selected module. The procedure will take up to two minutes. When finished, the module will assume its initial state. (If you have a 292e, you may see indication of any programming within the system on it' blue LED.) Wait up to two minutes or until the module's lights return to their normal state.

_See \*Exceptions to the remote enable are mostly for_ _modules with 2 processors and therefore 2 programming procedures._ _The same switch that when held displays the module's firmware and module ID also substitutes for the remote enable switch in Firmware updating procedures. One exception: The 225h does not report it's firmware version but firmware can loaded by connecting the input of the gate-to-pulse converter on the upper left of the module to a voltage \>2.5v (e.g., the output of the Euro-to-Buchla CV processor on the 225h with the pot offset set to 5v and banana cable from the blue "out" jack to the white banana jack)._
