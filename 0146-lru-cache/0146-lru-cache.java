class MyNode {
    private int value;
    private int key;
    public MyNode prev;
    public MyNode next;
    public MyNode(int key, int value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
    
    public void setValue(int value) {
        this.value = value;
    }
    public int getValue() {
        return this.value;
    }
     public int getKey() {
        return this.key;
    }
}


class DLL {
    private MyNode head;
    private MyNode tail;
    private int size;
    
    public DLL() {
        head = new MyNode(-1,-1);
        tail = new MyNode(-1,-1);
        head.next = tail;
        tail.prev = head;
        size = 0;
    }
    
    public void addFirst(MyNode node) {
        node.next = head.next;
        head.next.prev = node;
        node.prev = head;
        head.next = node;
    }
    
    public void removeNode(MyNode node) {
        node.next.prev = node.prev;
        node.prev.next = node.next;
    }
    
    public MyNode getLast() {
        return tail.prev;
    }
    
    public int size() {
        return size;
    }
    public void setSize(int value) {
        size = value;
    }
    
}

class LRUCache {
    
    private DLL dll;
    private Map<Integer, MyNode> map;
    final int capacity;

    public  LRUCache(int capacity) {
        dll = new DLL();
        map = new HashMap<>();
        this.capacity = capacity;
    }
    
    public int get(int key) {
        if(map.containsKey(key)) {
            MyNode node = map.get(key);
            dll.removeNode(node);
            dll.addFirst(node);
            return node.getValue();
        }
        return -1;
    }
    
    public void put(int key, int value) {
        if(map.containsKey(key)) {
            MyNode node = map.get(key);
            node.setValue(value);
            dll.removeNode(node);
            dll.addFirst(node);
        } else if(dll.size() >= capacity) {
            MyNode node = dll.getLast();
            dll.removeNode(node);
            map.remove(node.getKey());
            MyNode newNode = new MyNode(key, value);
            dll.addFirst(newNode);
            map.put(key, newNode);
        } else {
            MyNode newNode = new MyNode(key, value);
            dll.addFirst(newNode);
            map.put(key, newNode);
            dll.setSize(dll.size() + 1);
        }
    }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * LRUCache obj = new LRUCache(capacity);
 * int param_1 = obj.get(key);
 * obj.put(key,value);
 */