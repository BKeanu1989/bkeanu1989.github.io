# tar linux zip gzip
```md
# 1: tar (create uncompressed archive) all files and directories in the current working directory recursively into an uncompressed tarball
tar cvf filename.tar *

# 2: Untar (extract uncompressed archive) all files and directories in an uncompressed tarball recursively into the current working directory
tar xvf filename.tar

# 3: tar (create gzipped archive) all files and directories in the current working directory recursively into a tarball compressed with gzip
tar cvzf filename.tar.gz *

# 4: Untar (extract gzipped archive) all files and directories in a tarball compressed with gzip recursively into the current working directory
tar xvf filename.tar.gz # Note: same options as 2 above

# 5: tar (create bzip2'ed archive) all files and directories in the current working directory recursively into a tarball compressed with bzip2
tar cvjf filename.tar.bz2 * # Note: little 'j' in options

# 6: Untar (extract bzip2'ed archive) all files and directories in an tarball compressed with bzip2 recursively into the current working directory
tar xvf filename.tar.bz2 # Note: same options as 2 and 4 above

# 7: tar (create xz'ed archive) all files and directories in the current working directory recursively into a tarball compressed with xz
tar cvJf filename.tar.xz * # Note: capital 'J' in options

# 8: Untar (extract xz'ed archive) all files and directories in an tarball compressed with xz recursively into the current working directory
tar xvf filename.tar.xz # Note: same options as 2, 4, and 6 above
```