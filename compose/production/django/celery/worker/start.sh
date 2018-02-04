#!/usr/bin/env bash

set -o errexit
set -o pipefail
set -o nounset


celery -A travel_website_project.taskapp worker -l INFO
