(function(){
    function PVector(x, y, z) {
        this.x = x || 0;
        this.y = y || 0;
        this.z = z || 0;
    }

    PVector.prototype.set = function(v) {
        this.x = v.x;
        this.y = v.y;
        this.z = v.z;
    }

    PVector.prototype.get = function() {
        return new PVector(this.x, this.y, this.z);
    }

    PVector.prototype.mag = function() {
        return Math.sqrt(this.x * this.x + this.y * this.y + this.z * this.z);
    }

    PVector.prototype.magSq = function() {
        return (this.x * this.x + this.y * this.y + this.z * this.z);
    }

    PVector.prototype.add = function(v) {
        this.x += v.x;
        this.y += v.y;
        this.z += v.z;
    }

    PVector.prototype.sub = function(v) {
        this.x -= v.x;
        this.y -= v.y;
        this.z -= v.z;
    }

    PVector.prototype.mult = function(n) {
        this.x *= n;
        this.y *= n;
        this.z *= n;
    }

    PVector.prototype.div = function(n) {
        this.x /= n;
        this.y /= n;
        this.z /= n;
    }

    PVector.prototype.dist = function(v) {
        var dx = this.x - v.x;
        var dy = this.y - v.y;
        var dz = this.z - v.z;
        return Math.sqrt(dx * dx + dy * dy + dz * dz);
    }

    PVector.prototype.dot = function(v) {
        return this.x * v.x + this.y * v.y + this.z * v.z;
    }

    PVector.prototype.cross = function(v) {
        var x = this.y * v.z - this.z * v.y;
        var y = this.z * v.x - this.x * v.z;
        var z = this.x * v.y - this.y * v.x;
        return new PVector(x, y, z);
    }

    PVector.prototype.normalize = function() {
        var m = this.mag();
        if (m != 0 && m != 1) {
            this.div(m);
        }
    }

    PVector.prototype.limit = function(max) {
        if (this.mag() > max) {
            this.normalize();
            this.mult(max);
        }
    }

    PVector.prototype.setMag = function(len) {
        this.normalize();
        this.mult(len);
    }

    PVector.prototype.heading2D = function() {
        var angle = Math.atan2(-this.y, this.x);
        return -1 * angle;
    }

    PVector.prototype.rotate = function(theta) {
        var xTemp = this.x;
        this.x = this.x * Math.cos(theta) - this.y * Math.sin(theta);
        this.y = xTemp * Math.sin(theta) + this.y * Math.cos(theta);
    }

    PVector.prototype.lerp = function(v, amt) {
        this.x = this.x + (v.x - this.x) * amt;
        this.y = this.y + (v.y - this.y) * amt;
        if (this.z != null && v.z != null) {
            this.z = this.z + (v.z - this.z) * amt;
        }
    }

    PVector.prototype.angleBetween = function(v1, v2) {
        var dot = v1.x * v2.x + v1.y * v2.y + v1.z * v2.z;
        var v1mag = Math.sqrt(v1.x * v1.x + v1.y * v1.y + v1.z * v1.z);
        var v2mag = Math.sqrt(v2.x * v2.x + v2.y * v2.y + v2.z * v2.z);
        var amt = dot / (v1mag * v2mag);
        if (amt <= -1) {
            return Math.PI;
        } else if (amt >= 1) {
            return 0;
        }
        return Math.acos(amt);
    }


    PVector.sub = function(v1, v2) {
        return new PVector(v1.x - v2.x, v1.y - v2.y, (v1.z || 0) - (v2.z || 0));
    };

    PVector.add = function(v1, v2) {
        return new PVector(v1.x + v2.x, v1.y + v2.y, (v1.z || 0) + (v2.z || 0));
    };

    PVector.div = function(v, n) {
        return new PVector(v.x / n, v.y / n, (v.z || 0) / n);
    };

    $.global.PVector = PVector;
})();