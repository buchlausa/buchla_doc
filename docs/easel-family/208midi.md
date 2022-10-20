# Buchla 208MIDI

## Introduction
 The Buchla Music Easel of 2013 and after possessed extremely limited MIDI functionality that was dependent on the case and the 218 controller. The 208 module of that time had no MIDI functionality whatsoever.

 The creation of the 208C led to the creation of 208MIDI, which is a component that adds a satisfying variety of MIDI functionality to the versatile 208C module.

 Here is an exploration of the MIDI capabilities that 208MIDI provides.

## Basic MIDI Note Control
 The most basic aspect of control of the Easel Command is oscillator pitch. Of course, you have modulation inputs to change the behavior of oscillator pitch, but primarily, you'll need the means to control the oscillator pitch in general. Most people do so through notes from a Buchla controller or Buchla sequencer, and this control usually comes in through the "pitch" banana input at the bottom left of the 208C. This sends pitch voltages to the oscillators that control the pitch of the oscillators when the individual "keyboard" switches of those oscillators are switched to "on."

Keep in mind that to get the full oscillator range, you must start with the pitch/frequency faders at their lowest position, and use fine tune (if necessary) to tune the oscillators to C1 (32.7 Hz). The 208C MIDI range for these oscillators starts at MIDI note 24 (for reasons to be explained later).

The most general way to control this aspect of the 208C via MIDI is to send note number information on MIDI channel 1. This is basically the same as introducing a pitch voltage to the "pitch" banana input on the face of the 208C, and will control the pitches of both oscillators if their "keyboard" switch is set to "on." Any pitch bend information will also affect the oscillators, as well as portamento rate messages sent via CC5.

Controlling the MIDI pitch bend amount applied to can be achieved through CC 9, and has a range of plus or minus 1 through 12 semitones. This control can be sent on MIDI channels 1, 2, or 3.

When sending performances/sequences to the Easel Command via MIDI, you're going to need to trigger the envelopes. This is accomplished with "note on" MIDI messages also sent to MIDI channel 1, which trigger the envelopes when the envelope trigger switch is set to "keyboard." "Note on" messages can be for all notes above Note #23, as the notes below that note have other MIDI control functions.

## Controlling Oscillators Independently via MIDI

If you seek to control the pitch of the Complex Oscillator independently of the frequency of the Modulation Oscillator, you would send MIDI note numbers (and pitch bend information, if needed) to MIDI channel 2. If you had portamento rate changes for the Complex Oscillator you sought to make, you could use CC 5 on MIDI channel 2, as well.

If you sought to control the frequency of the Modulation Oscillator independently of the frequency of the Complex Oscillator, you would send MIDI note numbers (and pitch bend information, if needed) to MIDI channel 3. If you had portamento rate changes for the Complex Oscillator you sought to make, you could use CC 5 on MIDI channel 2, as well.

## Controlling Wavefolding with MIDI

Changes in the "timbre" (wave folding) function can be made through the MIDI CC 1 (which is usually intended for the mod wheel). This CC control can be sent on MIDI channels 1-3.

Controlling Oscillator Cross-Modulation with MIDI
 To change the modulation amount of the Modulation Oscillator affecting the Complex Oscillator, use MIDI CC 2 (which is usually intended for breath control). This CC control can be sent on MIDI channels 1-3.

Sending MIDI Control to the Pressure Output Banana Jacks
 The Buchla Music Easel, which features a 208/208C module and a 218e module, is designed to feature "pressure" control from the 218e as a modulation source on the 208/208C module. In the Easel, plugging the output of the "pressure" from the 218e to the "pressure" input present at the bottom lower left of the module allows a pressure modulation possibility output from the purple jacks in the jackfield. This feature can be emulated via MIDI through pressure-type modulation sent via MIDI channel pressure, or CC 14 on channels 1, 2, or 3.

Some MIDI keyboard controllers have a pressure output that is not smooth, and as a result, requires some smoothing, or "slewing" in order to be musical. It is possible to adjust the slew rate of the pressure signal by making changes via MIDI CC 3, which can be sent on MIDI channels 1-3.

## Using MIDI Velocity Control

Velocity MIDI data is available from the "from card" output banana jack when sent on MIDI channel 1.

## Using MIDI Note-On Messages to Advance Sequencer, etc.
 The Buchla 208MIDI paradigm does not allow for MIDI clock to control some aspects that one might expect, but instead, allows note-on messages lower than MIDI note #23 to control these aspects. Note-on messages above MIDI note #23 are used on channel one as the note-on messages for actual notes played, but those below MIDI note #23 can be used to trigger various events.

Sending note-on events on MIDI notes #0 through #2 will advance sequence steps. Sequencing notes in this range of MIDI note numbers will allow you to control both tempo and "note values" of steps based on the frequency of sequenced notes, and the rhythm of sequenced notes. The sequenced note-on events you send can be sent on MIDI channels 1-5.

Sending note-on events can trigger the envelope generator using the same method described above, yet sequencing note-on events on MIDI notes 6-8 on any MIDI channel amongst 1-5.

Because the Pulser is inherent to a lot of important functions on the 208C, using MIDI note-on events to trigger the Pulser is also possible using sequenced MIDI notes 9-11 as triggers. This allows you to effectively add rhythms to Pulser triggers using sequencing. As in other instances, these note-on messages can be sent on channels 1-5.

The pseudo-random output of the Random can be advanced using the note-on method to. The MIDI notes necessary to advance the Random are notes 3-5. Again, this is available on MIDI channels 1-5.

## Using 208MIDI to Control the Buchla Aux Card Oscillator

If you possess a Buchla Aux Card, you can send MIDI note-on, note number, and velocity information to the digital oscillator that exists in it by sending those messages to MIDI channel 4.
