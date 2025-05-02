# Batch Render Default Output Module

## About

km-batch-render-default-output-module will export selected compositions in your project panel or active comps in a batch process. Upon finishing rendering, you will see a dialog box showing you the location of your renders along with which comps were exported. Once you click okay on that dialog box your system folder destination will reveal itself. This script will also set the work area to be rendered to the full length of your composition.

## Installation

Download the .jsxbin file from the repo above to use in your version of After Effects.
The script must be placed in the Scripts directory in the After Effects application folder. That folder will be named “Adobe After Effects [version]” which has been replaced with “AE” below.

Mac OS X

```
/Applications/AE/Scripts/
```

Windows

```
\Program Files\AE\Support Files\Scripts\
```

If After Effects was running when you installed the script, you’ll need to restart it.

Also, you’ll need to allow After Effects to write files.
To do that follow this path:

```
Preferences > General > Check-off “Allow Scripts to Write Files and Access Network” > Close
Preferences
```

## Step 1

Select compositions in the project panel or open 1 composition to export current composition.

## Step 2

Launch the script from your favorite script launcher (e.g., Kbar) or launch it inside After Effects by navigating to **File > Scripts > Run Script File**

## Step 3

Choose the folder destination.

## Step 4

Mogrts exported to your destination of choice!

## Known Issues

Final folder only opens at it's root and doesn't open the directory. Will fix on next iteration.
