 var collection_a = [
    {key: "a"}, {key: "e"}, {key: "h"}, {key: "t"}, {key: "f"}, {key: "c"}, {key: "g"}, {key: "b"}, {key: "d"}
  ];
  var collection_b = {value: ["a", "d", "e", "f"]};
  
function collect_same_elements(collection_a, object_b) {
	var ar = [];
				
	for(p in collection_a){
		for(i in object_b.value){
			if(collection_a[p].key === object_b.value[parseInt(i)])
				ar.push(collection_a[p].key);
		}
	}
				
	return ar;
}

module.exports = collect_same_elements;
