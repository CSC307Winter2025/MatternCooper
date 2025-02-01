export default function ProjectsList(){
    return (
        <ul class="list-disc pl-6 space-y-2">
        <li><strong>Developing and leading Capstone team to integrate Acoustic Communication into previously developed crab trap buoy release device. </strong>
            <ul>
            This project, assigned to us by our client from Nova Robotics in Nova Scotia, is to add an acoustic modem to their buoy release device. The acoustic modem will enable us to control the device remotely and triangulate its position. This project has required us to do code and design collaboration, extensive documentation, and research into already developed solutions. This project will require us to become extremely familiar with low-power embedded systems, hardware testing automation, and custom network implementations. 
            </ul>
        </li>
        <li><strong>Designed and developed a custom RISC-V calculator written in Assembly that is run on a custom RISC-V MCU programed on a BASYS3 board using SystemVerilog. </strong>
            <ul>
            This calculator does unsigned integer addition, subtraction (with a negative output possible), multiplication, and division. The calculator differs from the above project as the input was done on a keyboard, and the output was a VGA display. The logic of the calculator was written in RISC-V Assembly with the standard ISA. Multiple optimizations were used within the program to reduce clock cycles in a self-appointed goal of optimization.     
            </ul>
        </li>
    </ul>
    );
}