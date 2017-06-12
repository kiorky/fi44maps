#!/usr/bin/env python
#-*- coding: utf-8 -*-
from collections import namedtuple
from collections import OrderedDict
import re
import json
import six
import sys
import csv
candidates = ['AMADOU',
              'EGRON',
              'NICOLAS',
              'MERAND',
              'KORIAT',
              'SCALES',
              'RINEAU',
              'AVELLO',
              'PERNOT',
              'SEMSAR_BEHAGUE',
              'CRAM',
              'MAGAUD',
              'REBORA',
              'RAIMBOURG',
              'CALONNE',
              'RAYNAUD',
              'BARRELY',
              'LEGEAY']
data = OrderedDict()
if __name__ == '__main__':
    if len(sys.argv) != 3:
        msg = ('Usage : {command} <input.json>'
               ' <outputd.json> <outputg.json>').format(
            command=sys.argv[0])
        print(msg)
        exit()
    with open(sys.argv[1], 'rb') as csvfile:
        spamreader = csv.DictReader(csvfile, delimiter=',', quotechar='"')
        for row in spamreader:
            candidat = row.get('candidat')
            if not candidat:
                continue
            for item, val in six.iteritems(row):
                if re.search('Boug', item):
                    recorder = data.setdefault(item, [])
                    recorder.append({candidat: val.replace(',', '.').replace('%', '') })
    with open(sys.argv[2], 'w') as outfile:
        response_json = json.dump(data, outfile, indent=2)
