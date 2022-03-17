function pillars(num_pill, dist, width) {
    let result = 0;
    let widthR = 0;
    
    if (num_pill == 1) {
      return 0;
    } else if (num_pill == 2) {
      return dist*100;
    }
    if (num_pill > 2) {
      for (let i = 1; i < num_pill; i++) {
        result += dist*100;
        widthR += width;
      }
    }
    return result+widthR-width
}