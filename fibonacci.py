def fibonacci(n):
  if n<=0:
    return []
  elif n==1:
    return [0]
  elif n==2:
    return [0,1]
  else:
    seq=[0,1]
    for i in range(2,n):
      seq.append(seq[i-1]+seq[i-2]) #bug should be seq[i-1]+seq[i-2]
    return seq

print(fibonacci(5))
