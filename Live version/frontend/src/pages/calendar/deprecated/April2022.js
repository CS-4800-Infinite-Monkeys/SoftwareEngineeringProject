import "./calendar.css"

const Apr2022 = () => {
    return (<>
        <body> 
            <div class="center">
            <table class="a" cellspacing="1" cellpadding="1">
                <tr style={{backgroundColor: "white"}}>
                    <th colspan="7"><h1>April</h1></th>
                </tr>
                <tr style={{backgroundColor:"lightslategray"}}>
                    <th>Sun</th>
                    <th>Mon</th>
                    <th>Tue</th>
                    <th>Wed</th>
                    <th>Thu</th>
                    <th>Fri</th>
                    <th>Sat</th>
                </tr>
                <tbody style={{backgroundColor:"whitesmoke",
                              verticalAlign: "top",
                              textAlign: "left",
                              fontSize:"10px"}}>
                <tr>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td>1</td>
                    <td>2</td>
                </tr>
                <tr>
                    <td>3</td>
                    <td>4</td>
                    <td>5</td>
                    <td>6</td>
                    <td>7</td>
                    <td>8</td>
                    <td>9</td>
                </tr>
                <tr>
                    <td>10</td>
                    <td>11</td>
                    <td>12</td>
                    <td>13</td>
                    <td>14</td>
                    <td>15</td>
                    <td>16</td>
                </tr>
                <tr>                    
                    <td>17</td>
                    <td>18</td>
                    <td>19</td>
                    <td>20</td>
                    <td>21</td>
                    <td>22</td>
                    <td>23</td>
                </tr>
                <tr>                    
                    <td>24</td>
                    <td>25</td>
                    <td>26</td>
                    <td>27</td>
                    <td>28</td>
                    <td>29</td>
                    <td>30</td>
                </tr>
            </tbody>
            </table>
        </div>
        </body>
    </>)
}

export default Apr2022