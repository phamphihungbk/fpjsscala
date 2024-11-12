object ListReplication {
  def f(num:Int,arr:List[Int]):List[Int] = {
    arr.flatMap(e => List.fill(num)(e))
  }

  def main(args: Array[String]): Unit = {
    val n = scala.io.StdIn.readInt() // Read the replication count
    val list = scala.io.StdIn.readLine().split(" ").map(_.toInt).toList // Read and parse the list
    val result = replicateElements(n, list)
    result.foreach(println)
  }
}