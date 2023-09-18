---
title: FFmpeg
summary: FFmpeg is a powerful multimedia framework that can be used to convert, shrink, and manipulate audio and video files. Whether you're working with high-definition footage or simple audio recordings, FFmpeg has the tools you need to get the job done quickly and efficiently.
date: 2023-03-05T00:39:01+01:00
draft: false
hideSummary: false
ShowCodeCopyButtons: true
categories:
  - Linux
  - Windows
tags:
  - ffmpeg
  - linux
  - debian
toc: true
autonumbering: true
author: helper4
thumbnail: images/linux.svg
---

FFmpeg is a powerful multimedia framework that can be used to convert, shrink, and manipulate audio and video files. Whether you're working with high-definition footage or simple audio recordings, FFmpeg has the tools you need to get the job done quickly and efficiently.

In this article, we'll explore some practical examples of using FFmpeg to convert and shrink audio and video files, as well as provide links to helpful tutorials and video resources.

## Installing FFmpeg on Linux:

- Open a terminal window.
- Run the command ```sudo apt-get update``` to update the package list.
- Run the command ```sudo apt-get install ffmpeg``` to install FFmpeg.
- Wait for the installation to complete.
- Verify the installation by running the command ffmpeg -version.

## Installing FFmpeg on Windows:

- Download the latest FFmpeg build from the  {{< a_blank target="_blank" title="official website" url="https://ffmpeg.org/download.html" >}}
- Extract the downloaded archive to a folder on your computer.
- Add the FFmpeg bin directory to your system's PATH environment variable. This can be done by following these steps:
    - Open the Start menu and search for ```Environment Variables```
    - Click ```Edit the system environment variables```
    - Click ```Environment Variables```
    - In the ```System variables``` section, scroll down and find ```Path```
    - Click ```Edit```
    - Click ```New``` and add the path to the FFmpeg bin directory, e.g., ```C:\ffmpeg\bin```
    - Click ```OK``` to save your changes.
    Open a new command prompt window and verify the installation by running the command ffmpeg -version.

These procedures should get you up and running with FFmpeg on Linux and Windows. However, keep in mind that there may be some additional steps or requirements depending on your specific operating system and configuration.

## Examples
### Converting Audio Files

To do this with FFmpeg, you'll first need to navigate to the directory where your audio file is located using the command prompt. Once there, you can use the following command to convert your file:

```bash
ffmpeg -i input_file.wav output_file.mp3
```
In above example, "input_file.wav" is the name of your original WAV file, and "output_file.mp3" is the name of the new MP3 file you want to create. FFmpeg will automatically determine the appropriate settings for the output file based on the input file, but you can also specify additional options such as bitrate and sample rate if needed.

### Shrinking Video Files

If you want to reduce the size of a large MP4 video file, you can use the following command:

```bash
ffmpeg -i input_file.mp4 -vcodec libx264 -crf 24 -preset medium -acodec copy output_file.mp4
```

For evan smaller file use following command (-crf 40):
```bash
ffmpeg -i 'Chapter 6.mp4' -vcodec libx265 -crf 40 Chapter-6-smaller.mp4
```
In this example, we're using the H.264 codec to compress the video (using the "-vcodec libx264" option) and the medium preset to determine the compression level (using the "-preset medium" option). We're also using the "-crf" option to specify the video quality (lower values result in higher quality) and the "-acodec copy" option to keep the original audio track without compression.

### Converting a video to a different format

This command converts an input MP4 video file to an output MP4 video file with the H.264 video codec, AAC audio codec, and a 128 kbps audio bitrate.

```bash
ffmpeg -i input.mp4 -c:v libx264 -preset slow -crf 22 -c:a aac -b:a 128k output.mp4
```

### Extracting audio from a video

This command extracts the audio track from an input MP4 video file and saves it as an output MP3 audio file.

```bash
ffmpeg -i input.mp4 -vn -acodec copy output.mp3
```

another example

```bash
ffmpeg -i video.avi -f mp3 audio.mp3
```


### Merging multiple video files

```bash
ffmpeg -i input1.mp4 -i input2.mp4 -filter_complex "[0:v:0][1:v:0]concat=n=2:v=1:a=0" -c:v libx264 -preset slow -crf 22 output.mp4
```

This command merges two input MP4 video files into a single output MP4 video file using the FFmpeg filter_complex option.

### Scaling a video

```bash
ffmpeg -i input.mp4 -vf scale=640:360 -c:v libx264 -preset slow -crf 22 output.mp4
```

This command scales an input MP4 video file to a resolution of 640x360 and saves it as an output MP4 video file.

### Cropping a video

```bash
ffmpeg -i input.mp4 -filter:v "crop=in_w/2:in_h/2:in_w/4:in_h/4" -c:v libx264 -preset slow -crf 22 output.mp4
```

This command crops an input MP4 video file to half its original size and saves it as an output MP4 video file.

### Converting a video to a GIF

```bash
ffmpeg -i input.mp4 -vf "scale=320:-1,split[s0][s1];[s0]palettegen[p];[s1][p]paletteuse" -loop 0 output.gif
```
This command converts an input MP4 video file to an output GIF file with a resolution of 320 pixels and an infinite loop.


### Adding a watermark to a video

```bash
ffmpeg -i input.mp4 -i watermark.png -filter_complex "overlay=10:10" -c:v libx264 -preset slow -crf 22 output.mp4
```
This command adds a PNG watermark to an input MP4 video file at the top left corner and saves it as an output MP4 video file.

### Extracting frames from a video

```bash
ffmpeg -i input.mp4 -r 1 -f image2 output-%03d.jpg
```

This command extracts one frame per second from an input MP4 video file and saves them as output JPG image files.

### Converting a stereo audio file to mono

```bash
ffmpeg -i input.mp3 -ac 1 output.mp3
```
This command converts a stereo input MP3 audio file to a mono output MP3 audio file.

### Speeding up or slowing down a video:

```bash
ffmpeg -i input.mp4 -filter:v "setpts=0.5*PTS" -filter:a "atempo=2.0" -c:v libx264 -preset slow -crf 22 output.mp4
```

This command speeds up an input MP4 video file by 2x using the FFmpeg setpts and atempo filters and saves it as an output MP4

## Explore yourself
{{< rawhtml >}} <div class="lnkRef"> {{< /rawhtml >}}

{{< a_blank target="_blank" title="FFmpeg documentation " url="https://ffmpeg.org/documentation.html" >}} 
{{< a_blank target="_blank" title="FFmpeg Wiki" url="https://trac.ffmpeg.org/wiki" >}} 
{{< a_blank target="_blank" title="FFmpeg Filters documentation" url="https://ffmpeg.org/ffmpeg-filters.html" >}} 
{{< a_blank target="_blank" title="FFmpeg Trac ticket system" url="https://trac.ffmpeg.org/" >}} 
{{< a_blank target="_blank" title="Stack Overflow" url="https://stackoverflow.com/search?q=FFmpeg&s=764b4d0b-7c94-4f80-b405-4351c0e920e0" >}} 
{{< a_blank target="_blank" title="FFmpeg Crash Course" url="https://www.youtube.com/watch?v=yieG9DZQ_vM" >}} 
{{< a_blank target="_blank" title="FFmpeg subreddit " url="https://www.reddit.com/r/ffmpeg/" >}} 


{{< rawhtml >}} </div> {{< /rawhtml >}}

These resources provided me with a wealth of information and examples that I was able to use to put together this article. They are excellent sources of information for anyone looking to learn more about FFmpeg and its capabilities.

&nbsp;