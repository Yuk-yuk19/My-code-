#!/bin/bash
tasknumber="$1"
daynumber="$2"

dayformatted=$(printf "%02d" $daynumber)

mkdir ./day${dayformatted}

for ((i=1; i<tasknumber+1; i++)); do
    taskformatted=$(printf "%02d" $i)
    mkdir ./day${dayformatted}/task${taskformatted}
done