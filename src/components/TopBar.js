import './TopBar.css'
export default function TopBar()
{
    return(
        <div className="TopBar">
            <div className='TopBar--container'>
                <img width="24px" alt='Earth' src="https://img.icons8.com/ios-glyphs/512/ffffff/globe--v1.png"></img>
                <div className='TopBar--text'>my travel journal.</div> 
            </div>
            
        </div>
    );
}