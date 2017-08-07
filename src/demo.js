module.exports = {
    add: function(a, b) {
        return a + b
    },
    // 金钱加千分号
    cut: function(money) {
        let m = Number(money),
            result = [];
        const base = 1000;

        function fn(num) {
            let len = 0,
                str = num.toString();

            try{
                len = str.split('.')[1].length
            } catch(e) {
                // not deal
            }
            
            return Number(str.replace('.', '')) % (base * Math.pow(10, len)) / Math.pow(10, len)
        }

        if (isNaN(m)) return 0;

        while(m >= base) {
            result.unshift(fn(m));
            m = parseInt(m / base);
        }

        result.unshift(fn(m));

        return result.join(',')
    }
}
