class My_Stack
  def initialize()
    @size = 0
    @limit = 5
    @storage_array = Array.new(@limit)
  end

  def pop()
    return nil if @size == 0
    @size -= 1
    return @storage_array[@size]
  end

  def push(value)
    return nil if @size == @limit
    @storage_array[@size] = value
    @size += 1
  end

  def peek()
    p @storage_array[@size-1]
  end

  def is_empty()
    return true if @size == 0
  end

  def print()
    p "Stack: "
    @size.times do |i|
      p @storage_array[i]
      p " "
    end
    puts
  end
end

my_stack = My_Stack.new()
my_stack.push(5)
my_stack.push(70)
my_stack.push(9)
my_stack.print()
my_stack.peek()
