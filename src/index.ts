export class Tool {
    private static RADIUS_EARTH_METER: number = 6378137; //WGS1984坐标系： 6378137.0，这个值应该是地球半径，根据坐标系不同也不同

    /**
     * 计算两个坐标之间的方位角
     * @param lat1 坐标1的纬度
     * @param lon1 坐标1的经度
     * @param lat2 坐标2的纬度
     * @param lon2 坐标2的经度
     * @return
     */
    public static getAngleBetweenTwoPoints(lat1: number, lon1: number, lat2: number, lon2: number): number {
        let changedX = lon2 - lon1;
        let changedY = lat2 - lat1;
        return Math.atan2(changedY, changedX) / Math.PI * 180;
    }
    /**
     * 计算两个坐标之间的距离
     * @param lat1 坐标1的纬度
     * @param lon1 坐标1的经度
     * @param lat2 坐标2的纬度
     * @param lon2 坐标2的经度
     * @return
     */
    public static getDistanceBetweenTwoPoints(lat1: number, lon1: number, lat2: number, lon2: number): number {
        let a = Tool.Rad(lat1) - Tool.Rad(lat2);
        let b = Tool.Rad(lon1) - Tool.Rad(lon2);
        let s = 2 * Math.asin(Math.sqrt(Math.pow(Math.sin(a / 2), 2) + Math.cos(Tool.Rad(lat1)) * Math.cos(Tool.Rad(lat2)) * Math.pow(Math.sin(b / 2), 2)));
        s = s * Tool.RADIUS_EARTH_METER;
        s = Math.round(s * 10000) / 10000;
        return s;
    }
    private static Rad(d: number): number {
        return d * Math.PI / 180.0;
    }
}