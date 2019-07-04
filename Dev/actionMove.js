// Function dataCanvas chứa dữ liệu của đối tượng hình vuông trong mảng
			function dataCanvas(){
				this.isSelected = false; // Method isSelect lưu trữ trạng thái của Canvas
				this.x = 0; // Tọa độ x của Canvas
				this.y = 0; // Tọa độ y của Canvas
				this. width = 1; // Độ rộng của Canvas
				this.height = 1; // Độ cao của Canvas
			}

			// Kiểm tra tọa độ dataCanvas
			dataCanvas.prototype.contains = function(x,y){
    			var right = this.x + this.width;
    			var bottom = this.y + this.height;
    			return x > this.x && x < right && y > this.y && y < bottom;
    		}

    		// Chứa các đối tượng  dataCanvas
    		function ShapeList(){
    			this.items = [];
    			this.selectedItem = null;
    			this.offsetX = -1;
    			this.offsetY = -1;
			}

			// Thêm dataCanvas vào mảng
			ShapeList.prototype.addItem = function(x,y,width,height){
    			var rect = new Rect;
    			dataCanvas.x = x;
    			dataCanvas.y = y;
    			dataCanvas.width = width;
    			dataCanvas.height = height;
 
	    		this.items.push(dataCanvas);
			}

			// Tìm và chọn đối tượng dataCanvas chứa tọa độ [x,y]
			ShapeList.prototype.selectAt = function(x,y){
    			if(this.selectedItem)
        			this.selectedItem.isSelected = false;
    				this.selectedItem = null;
    			for (var i = 0; i < this.items.length; i++) {
        			var rect = this.items[i];
        			if(rect.contains(x,y))
        		{
            		this.selectedItem = this.items[i];
            		this.offsetX = x - this.items[i].x;
            		this.offsetY = y - this.items[i].y;
            		this.items[i].isSelected = true;
            		break;
        		}
    		}
		}
            
            