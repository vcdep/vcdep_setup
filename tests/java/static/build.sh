#! /bin/bash

cd pmd-bin-5.1.0/bin/
bash run.sh pmd -dir /cdep/repos/$1/src/application/ -f text -rulesets java-basic,java-design
