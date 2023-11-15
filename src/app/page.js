import Link from "next/link";
import Button from "@mui/material/Button";
const page = () => {

  return (

    <div>
      <p className="text-lg text-center"> Homepage </p>

      <div className="text-center mt-5">
        <Link href={'/dashboard'}>
          <Button variant='outlined' >
            Go to Dashboard
          </Button>
        </Link>
      </div>



    </div>

  )
}

export default page;
