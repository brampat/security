# Pipal

Runs a number of statistics analysis on a text-file with plain-text passwords

## Default call
```bash
./pipal.rb <password-file>
```

## Working with large rainbow-table files

I've downloaded several 10+ GB files with hash & passwords on each line. These files cannot be processed by Pipal as-is.

```
00005b2cd196d41eaf5fcaa3750d8c4424b342dd:qwerty_035
00018f425a84093bcc5bae9c91e6962c452cc31e:qwertyuiopqwertyuiop
0005a06b92010a7ba16f49b40a26e83b123b2694:qwerty539
0008571d45afdca347b7e0f5752484f3a29ee757:qwerty=3

```

Use the following commands to extract a sub-set of lines and remove the hash-part from each line:

```bash
(head -<lines to take from start of file> <big file with hashes> | sed 's/.*://') >> <output-file>
```

Then run Pipal as normal:
```bash
./pipal.rb <output-file from previous step>
```

