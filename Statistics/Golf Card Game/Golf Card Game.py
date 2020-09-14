

deck = []
for i in range(10):
    for j in range(4):
        deck.append(str(i+1))
for j in range(4):
    deck.append(str('J'))
for j in range(4):
    deck.append(str('Q'))
for j in range(4):
    deck.append(str('K'))
for j in range(2):
    deck.append(str('W'))
#deck

point_values = {}
for i in range(10):
    point_values[str(i+1)] = i+1
point_values['J'] = 10
point_values['Q'] = 10
point_values['K'] = 0
point_values['W'] = -2
#point_values  

discard = ['6']
me = [['?','3'],['?','8'],['?','?']]
you = [['?','?'],['?','5'],['?','4']]


unknowns = deck
for c in discard:
    if c in unknowns:
        unknowns.remove(c)
for c in me:
    if c in unknowns:
        unknowns.remove(c)
for c in you:
    if c in unknowns:
        unknowns.remove(c)
#unknown_cards


def prob2_same(c):
    if c in unknowns:
        if unknowns.count(c) >= 2:
            return (unknowns.count(c)-1)/(len(unknowns)-1)
    return 0

def prob2_diff(c):
    if c in unknowns:
        return unknowns.count(c)/(len(unknowns)-1)
    return 0

def prob(c):
    #print('prob')
    if c in unknowns:
        return unknowns.count(c)/len(unknowns)
    return 0

def prob2_all():
    #print('prob2_all')
    return_val = 0
    for c in point_values.keys():
        return_val += prob(c)*prob2_same(c)
    return return_val

def score(c):
    #print('score')
    return point_values[c]

def remove_values_from_list(the_list, val):
    #print('remove_values_from_list')
    return [value for value in the_list if value != val]
    
def get_mean(arr):
    #print('get_mean')
    tot = 0
    for c in arr:
        tot += score(c)
    return tot/len(arr)


def get_prob_both_same(col):
    #print('get_prob_both_same')
    c1 = col[0]
    c2 = col[1]
    if c1 != '?' and c2 != '?':
        if c1 == c2:
            return 1
    elif c1 != '?':
        return prob(c2)
    elif c2 != '?':
        return prob(c1)
    elif c1 == '?' and c2 == '?':
        return prob2_all()
    return 0


def get_not_same_scores(col):
    #print('get_not_same_scores')
    return_val = []
    c1 = col[0]
    c2 = col[1]
    if c1 != '?' and c2 != '?':
        return_val.append({
            'score': score(c1)+score(c2),
            'prob': 1
        })
    elif c1 != '?':
        for c_2 in point_values.keys():
            if c1 != c_2:
                if prob(c1)*prob2_diff(c_2) > 0:
                    return_val.append({
                        'score': score(c1)+score(c_2),
                        'prob': prob(c1)*prob2_diff(c_2)
                    })
    elif c2 != '?':
        for c_1 in point_values.keys():
            if c2 != c_1:
                if prob(c2)*prob2_diff(c_1) > 0:
                    return_val.append({
                        'score': score(c2)+score(c_1),
                        'prob': prob(c2)*prob2_diff(c_1)
                    })
    elif c1 == '?' and c2 == '?':
        for c_1 in point_values.keys():
            for c_2 in point_values.keys():
                if c_1 != c_2:
                    if prob(c_1)*prob2_diff(c_2) > 0:
                        return_val.append({
                            'score': score(c_1)+score(c_2),
                            'prob': prob(c_1)*prob2_diff(c_2)
                        })
    return return_val

def get_prob_both_w(col):
    #print('get_prob_both_w')
    c1 = col[0]
    c2 = col[1]
    if c1 == 'W' and c2 == 'W':
        return 1
    elif c1 == 'W' or c2 == 'W':
        return prob('W')
    elif c1 == '?' and c2 == '?':
        return prob('W')*prob2_same('w')
    return 0
    
def get_col_scores(col):
    #print('get_col_scores')
    return_val = []
    prob_both_same = get_prob_both_same(col)
    prob_both_w = get_prob_both_w(col)
    if prob_both_same*prob_both_w > 0:
        return_val.append({
            'score': -4,
            'prob': prob_both_same*prob_both_w
        })
    if prob_both_same*(1-prob_both_w) > 0:
        return_val.append({
            'score': 0,
            'prob': prob_both_same*(1-prob_both_w)
        })
    not_same_scores = get_not_same_scores(col)
    for s in not_same_scores:
        if (1-prob_both_same)*s['prob'] > 0:
            return_val.append({
                'score': s['score'],
                'prob': (1-prob_both_same)*s['prob']
            })
    return return_val
   

def get_scores(m): # return [{'score':#,'prob':#}]
    #print('get_scores')
    return_val = []
    for s0 in get_col_scores(m[0]):
        for s1 in get_col_scores(m[1]):
            for s2 in get_col_scores(m[2]):
                if s0['prob']*s1['prob']*s2['prob'] > 0:
                    return_val.append({
                        'score': s0['score']+s1['score']+s2['score'],
                        'prob': s0['prob']*s1['prob']*s2['prob']
                    })
    return return_val

def oddsOfWinning(m,y):
    #print('oddsOfWinning')
    scores_me = get_scores(m)
    scores_you = get_scores(y)
    tot_prob = 0
    for d1 in scores_me:
        for d2 in scores_you:
            if d1['score'] > d2 ['score']:
                tot_prob += d1['prob']
    return tot_prob

m=[
    ['3','3'],
    ['8','8'],
    ['?','?']
]
y=[
    ['4','4'],
    ['5','5'],
    ['?','?']
]
scores_me = get_scores(m)
scores_you = get_scores(y)
#print(scores_me)
tot_prob = 0
for d1 in scores_me:
    print(d1['score'])
    for d2 in scores_you:
        if d1['score'] > d2 ['score']:
            tot_prob += d1['prob']
print(tot_prob)


#print('Your odds of winning',oddsOfWinning(me,you))
#print('Her odds of winning',oddsOfWinning(you,me))
#print('Unknown average = ',get_mean(unknowns))