#!/usr/bin/env python
#-*- coding: utf-8 -*-
from collections import namedtuple
import json
import sys
"""
    Ce fichier convertit les données brutes de bureaux provenant de
    data.nantes.fr en format lisible par le scrit Leaflet dans index.hmtl
"""
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
OfficeResults = namedtuple('OfficeResult', ' ,'.join(candidates))

if __name__ == '__main__':

    if len(sys.argv) != 4:
        msg = ('Usage : {command} <input.json>'
               ' <outputd.json> <outputg.json>').format(
            command=sys.argv[0])
        print(msg)
        exit()

    offices = {}
    general = {'votants': 0,
               'exprimes': 0,
               'inscrits': 0}
    gresults = {}

    with open(sys.argv[1], 'r') as json_file:
        reader = json.load(json_file, encoding='utf8')
        for row in reader['data']:
            # Get results for each political list
            results = sorted(
                [{candidate.lower():
                  float(row[candidate]) * 100. / float(row['VOTANTS'])}
                 for candidate in candidates],
                key=lambda k: k.values(),
                reverse=True)
            parts = row['BUREAU_DE_VOTE'].split()
            if parts[0] == "1":
                bureau = " ".join(parts[2:])
            else:
                bureau = "Nantes-"+parts[0]
            offices[bureau] = results
            for i in row:
                try:
                    vval = row[i]
                    if not vval:
                        vval = 0
                    val = int(vval)
                    if i.lower() in general:
                        general[i.lower()] += val
                    else:
                        general[i.lower()] = val
                except ValueError:
                    continue
        # Get results for each political list
        gresults = sorted(
            [{candidate.lower():
              float(general[candidate.lower()]) * 100. / float(general['votants'])}
             for candidate in candidates],
            key=lambda k: k.values(),
            reverse=True)

    with open(sys.argv[2], 'w') as outfile:
        response_json = json.dump(offices, outfile, indent=2)
    with open(sys.argv[3], 'w') as outfile:
        response_json = json.dump(gresults, outfile, indent=2)
